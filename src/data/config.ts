export const storeHours = [
  { days: "Segunda", time: "17h às 01h" },
  { days: "Terça a quinta", time: "09h às 01h" },
  { days: "Sexta e sábado", time: "09h às 03h" },
  { days: "Domingo", time: "09h às 01h" },
] as const;

export const storeConfig = {
  name: "Adega do Gordo",
  slogan: "Bebidas geladas, petiscos e delivery na sua porta.",
  whatsapp: "5518996446449",
  instagram: "https://www.instagram.com/adegadogordojunqueiropolis/",
  address: "Junqueirópolis, SP",
  hours: storeHours,
  about:
    "A Adega do Gordo é referência em Junqueirópolis quando o assunto é bebida gelada, petiscos e aquele atendimento de respeito. Peça pelo site e finalize no WhatsApp — rápido, fácil e sem complicação.",
};
