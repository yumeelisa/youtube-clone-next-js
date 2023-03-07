import { Prisma } from "@prisma/client"

export type PlaylistWithPayload = Prisma.PlaylistGetPayload<{
    include:{
      saved:true,
      user:true
    }
  }>
