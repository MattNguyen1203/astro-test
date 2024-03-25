import commune from '../../../address/commune.json'
export async function GET() {
  return Response.json(commune)
}
