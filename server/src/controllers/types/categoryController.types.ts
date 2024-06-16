import { RequestWithBody } from "../../types/request";

export type CategoryControllerCreateReq = RequestWithBody<{
  code: string;
  title: string;
}>;
