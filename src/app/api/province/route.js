import province from '../../../address/province.json'
export async function GET() {
  return Response.json(province)
}
