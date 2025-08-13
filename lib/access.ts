/**
 * Stubbed access control helper.  In a full implementation this
 * function would query your database to determine if a given
 * fan/user or IP address has been blocked by a creator.  For the
 * purposes of this demo it always returns `false`.  See the README
 * for details on how to extend this logic.
 */

export async function isBlocked(creatorId: string, fanId: string | null, ip: string): Promise<boolean> {
  // This stub always allows access.  Replace with your own logic
  // that checks Prisma for a matching Block record.
  return false;
}
