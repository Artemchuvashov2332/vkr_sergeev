import { RequestWithBody } from "../../types/request";

export type TypeControllerCreateReq = RequestWithBody<{
  code: string;
  title: string;
  categoryId: number;
}>;
