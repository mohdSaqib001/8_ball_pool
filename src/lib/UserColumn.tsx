"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Users = {
  id: string
  username: string
  level: number
  email: string
}

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "level",
    header: "Level",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
]
