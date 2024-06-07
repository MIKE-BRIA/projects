import { NextResponse } from "next/server";

import fs from "node:fs/promises";

export async function POST(req) {
  const links = [];
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    console.log(file);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const fileName = file.name;
    const extension = fileName.split(".").pop();
    const filename = `${Date.now()}.${extension}`;
    console.log(filename);

    await fs.writeFile(`./public/uploads/${filename}`, buffer);

    // revalidatePath("/");

    const link = `/uploads/${filename}`;
    // Push the file information to the links array
    links.push(link);

    // return NextResponse.json({ status: "success" });
    return new Response(JSON.stringify(links), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}
