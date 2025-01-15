import { NextResponse } from "next/server"
export async function GET() {
  const res = {items:[{name: "home", url:"/"},{name: "quienessomos", url:"/quienes-somos"}]}
 
  return NextResponse.json({...res},{status:201})
}