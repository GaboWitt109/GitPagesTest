export interface BvcData {
  COD_SIMB: string;
  DESC_SIMB: string;
  HORA: string;
  ICON: string;
  MONTO_EFECTIVO: string;
  PRECIO: string;
  VAR_ABS: string;
  VAR_REL: string;
  VOLUMEN: string;
}

export interface BvcResponse<T> {
  code: number;
  message: string;
  response: T;
  success: boolean;
}

export interface InstrumentDetail {
  cur_encab_simb_rv: {
    COD_SIMB: string;
    DESC_SIMB: string;
    DESC_EMP: string;
    COD_ISIN: string;
    ESTATUS: string;
    ACC_CIRC: string;
    MONEDA: string;
  }[];
  cur_cap_simb_rv: {
    CAPITALI_BS: string;
    CAPITALI_US: string;
  }[];
  cur_con_lib_ord_rv: {
    VOL_CMP_1: string | null;
    PRE_CMP_1: string | null;
    VOL_CMP_2: string | null;
    PRE_CMP_2: string | null;
    VOL_CMP_3: string | null;
    PRE_CMP_3: string | null;
    VOL_CMP_4: string | null;
    PRE_CMP_4: string | null;
    VOL_CMP_5: string | null;
    PRE_CMP_5: string | null;
    VOL_CMP_6: string | null;
    PRE_CMP_6: string | null;
    VOL_VTA_1: string | null;
    PRE_VTA_1: string | null;
    VOL_VTA_2: string | null;
    PRE_VTA_2: string | null;
    VOL_VTA_3: string | null;
    PRE_VTA_3: string | null;
    VOL_VTA_4: string | null;
    PRE_VTA_4: string | null;
    VOL_VTA_5: string | null;
    PRE_VTA_5: string | null;
    VOL_VTA_6: string | null;
    PRE_VTA_6: string | null;
    PRE_MED_POND_VTA: string | null;
    PRE_MED_POND_CMP: string | null;
    PROF_MERC_CMP: string | null;
    PROF_MERC_VTA: string | null;
  }[];
  cur_ult_benef_otr_rv: {
    COD_SIMB: string;
    COD_SIMB_DIVID: string;
    FEJUN: string;
    FEREG: string;
    FEPAG: string;
    TOT_BENEF: string;
    ACCIONES: string | null;
    EFECTIVO: string;
    PRECIO_AJUST: string | null;
  }[];
  cur_precio_var_rv: {
    PRECIO_ULT: string;
    ULT_VAR_ABS: string;
    ULT_VAR_REL: string;
    PRECIO_APERT: string;
    PRECIO_MAX: string;
    MAX_VAR_ABS: string;
    MAX_VAR_REL: string;
    PRECIO_MED: string;
    MED_VAR_ABS: string;
    MED_VAR_REL: string;
    PRECIO_MIN: string;
    MIN_VAR_ABS: string;
    MIN_VAR_REL: string;
    PRECIO_MAX_ANO: string;
    PRECIO_MIN_ANO: string;
  }[];
  cur_vol_trx_rv: {
    TOT_OP_NEGOC: string;
    VOLUMEN: string;
    MONTO_EFECTIVO: string;
  }[];
  cur_vol_an_rv: unknown[];
  cur_vol_x_ano_rv: {
    TOT_OP_NEGOC: string;
    TOT_ACC_NEGOC: string;
    TOT_MONTO_NEGOC: string;
  }[];
  cur_grf_sesion_rv: {
    PRECIO: string;
    FEC: string;
  }[];
  cur_grf_anual_pre_rv: {
    FEC: string;
    PRECIO_CIE: string;
  }[];
  cur_grf_anual_vol_rv: {
    FEC: string;
    TOT_ACC_NEGOC: string;
  }[];
  cur_det_vol_dia_rv: {
    TIPO_MERCADO: string;
    TOT_OP_NEGOC: string;
    TOT_ACC_NEGOC: string;
    TOT_MONTO_NEGOC: string;
  }[];
  cur_ult_beneficios_rv: {
    COD_SIMB: string;
    COD_SIMB_DIVID: string;
    FEC_JUN: string;
    FEC_REG: string;
    FEC_PAG: string;
    TOT_BENEF: string | null;
    SUSC_DESDE: string;
    SUSC_HASTA: string;
    PRECIO_SUSC: string;
    ACCIONES: string | null;
  }[];
  cur_benef_x_suscrp_rv: {
    COD_SIMB: string;
    COD_SIMB_DIVID: string;
    FEC_JUN: string;
    FEC_REG: string;
    FEC_PAG: string;
    TOT_BENEF: string | null;
    SUSC_DESDE: string;
    SUSC_HASTA: string;
    PRECIO_SUSC: string;
    ACCIONES: string | null;
  }[];
}

export interface DialogInstrumentDetail {
  open: string | undefined;
  high: string | undefined;
  low: string | undefined;
  previousClose: string | undefined;
  changeDaily: string | undefined;
  percentChangeDaily: string | undefined;
  bidVolume: string | null;
  bidPrice: string | null;
  askVolume: string | null;
  askPrice: string | null;
  codSimb: string | undefined;
  descSimb: string | undefined;
  descEmp: string | undefined;
  codIsin: string | undefined;
  status: string | undefined;
  accCirc: string | undefined;
  currency: string | undefined;
  capitalBs: string | undefined;
  capitalUs: string | undefined;
  historic: { FEC: string; PRECIO_CIE: string }[] | undefined;
  color: string;
  icon: string;
}
