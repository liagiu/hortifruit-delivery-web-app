export interface Produto {
  nome: string;
  id: number;
  valor: number;
  informacoesNutricionais: InformacoesNutricionais;
}

export interface InformacoesNutricionais {
  carboidratos: number;
  proteina: number;
  gordura: number;
  calorias: number;
  acucar: number;
}
