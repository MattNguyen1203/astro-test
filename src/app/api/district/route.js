import district from '../../../address/district.json'
export async function GET() {
  return Response.json(district)
}
