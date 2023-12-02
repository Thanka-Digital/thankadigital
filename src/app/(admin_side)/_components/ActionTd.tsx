"use client";

import { apiCaller } from "@/helpers/apiCaller";
import Link from "next/link";

interface ActionTdProps {
  editUrl: string;
  deleteUrl: string;
}

const ActionTd = ({ editUrl, deleteUrl }: ActionTdProps) => {

  const handleDelete = async () => {
    if(!window.confirm("Are you sure you want to delete this record?")) return;
    const res = await apiCaller(deleteUrl, "DELETE");
    if(res.isGood) {
      window.location.reload();
    } else {
      console.log(res);
    }
  }

  return (
    <td className="flex items-center justify-center h-24 gap-4">
      <Link href={editUrl} className="font-semibold text-primary_blue">Edit</Link>
      <button className="font-semibold text-primary_red" onClick={handleDelete}>Delete</button>
    </td>
  )
}

export default ActionTd