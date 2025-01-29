import { Component, inject } from '@angular/core';
import { BvcService } from '../../../services/bvc.service';
import {
  AsyncPipe,
  CommonModule,
  JsonPipe,
  NgOptimizedImage,
} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { InstrumentDetailDialogComponent } from './components/instrument-detail-dialog/instrument-detail-dialog.component';
import { catchError, EMPTY, first, of, Subject, tap } from 'rxjs';
import {
  DialogInstrumentDetail,
  InstrumentDetail,
} from '../../../models/bvc.interface';
import { A } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-bvc-instruments',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgOptimizedImage,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './bvc-instruments.component.html',
  styleUrl: './bvc-instruments.component.css',
})
export class BvcInstrumentsComponent {
  bvcService = inject(BvcService);
  dialog = inject(MatDialog);
  error$: Subject<string> = new Subject<string>();

  data$ = this.bvcService.getData().pipe(
    tap((algo) => console.log(algo)),
    catchError((error) => {
      if (error.error) {
        this.error$.next(error.error);
        return EMPTY;
      }
      return of(error);
    }),
  );

  openDetail(symbolId: string, icon: string, graphColor: string) {
    this.bvcService
      .getDetail(symbolId)
      .pipe(first())
      .subscribe((data) => {
        const processedData: DialogInstrumentDetail = this.processData(
          data,
          graphColor,
          icon,
        );

        this.dialog.open(InstrumentDetailDialogComponent, {
          width: '1200px',
          panelClass: 'my-dialog',
          data: {
            ...processedData,
          },
        });
      });
  }

  private processData(
    data: InstrumentDetail,
    graphColor: string,
    icon: string,
  ) {
    let bid = {
      volume: '',
      price: '',
    };
    let ask = {
      volume: '',
      price: '',
    };
    let capitalBs;
    let capitalUs;
    let codSimb;
    let descSimb;
    let descEmp;
    let codIsin;
    let status;
    let accCirc;
    let currency;

    // Information about Bid (Buy) and Ask (Sell)
    if (data.cur_con_lib_ord_rv && data.cur_con_lib_ord_rv.length > 0) {
      const [bidsAndAsks] = data.cur_con_lib_ord_rv;

      bid = {
        volume: bidsAndAsks['VOL_CMP_1'] || '',
        price: bidsAndAsks['PRE_CMP_1'] || '',
      };

      ask = {
        volume: bidsAndAsks['VOL_VTA_1'] || '',
        price: bidsAndAsks['PRE_VTA_1'] || '',
      };
    }

    // Information about the action
    if (data.cur_encab_simb_rv && data.cur_encab_simb_rv.length > 0) {
      const actionInfo = data.cur_encab_simb_rv[0];
      codSimb = actionInfo['COD_SIMB'];
      descSimb = actionInfo['DESC_SIMB'];
      descEmp = actionInfo['DESC_EMP'];
      codIsin = actionInfo['COD_ISIN'];
      status = actionInfo['ESTATUS'];
      accCirc = actionInfo['ACC_CIRC'];
      currency = actionInfo['MONEDA'];
    }

    // Information about capital
    if (data.cur_cap_simb_rv && data.cur_cap_simb_rv.length > 0) {
      const capitalInfo = data.cur_cap_simb_rv[0];
      capitalBs = capitalInfo['CAPITALI_BS'];
      capitalUs = capitalInfo['CAPITALI_US'];
    }

    // Information about price
    let open,
      high,
      low,
      previousClose,
      changeDaily,
      percentChangeDaily,
      historic;
    let color = 'text-green-500';

    if (data.cur_precio_var_rv && data.cur_precio_var_rv.length > 0) {
      const [priceInfo] = data.cur_precio_var_rv;

      open = priceInfo['PRECIO_APERT'];
      high = priceInfo['PRECIO_MAX'];
      low = priceInfo['PRECIO_MIN'];
      previousClose = priceInfo['PRECIO_ULT'];
      changeDaily = priceInfo['ULT_VAR_ABS'];
      percentChangeDaily = priceInfo['ULT_VAR_REL'];
      historic = data.cur_grf_anual_pre_rv;
      color = +graphColor < 0 ? 'text-red-500' : 'text-green-500';
    }

    return {
      open,
      high,
      low,
      previousClose,
      changeDaily,
      percentChangeDaily,
      bidVolume: bid.volume,
      bidPrice: bid.price,
      askVolume: ask.volume,
      askPrice: ask.price,
      codSimb,
      descSimb,
      descEmp,
      codIsin,
      status,
      accCirc,
      currency,
      capitalBs,
      capitalUs,
      historic,
      color,
      icon,
    };
  }
}
