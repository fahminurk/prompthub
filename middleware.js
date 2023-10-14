import { NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(req) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, ["/create-prompt", "/profile"]);
