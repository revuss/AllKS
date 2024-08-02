import { useState } from "react";
import { AddForm } from "../addForm/AddForm";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { PaginationComponent } from "./pagination";

export function TableComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  return (
    <>
      <section className="mx-10 p-5 my-10 border-2 border-orange-700  rounded-lg">
        <Input
          placeholder="search..."
          type="text"
          id="search"
          //   className="w-[50%] my-5 ring-2 ring-orange-700"
          className="  focus-visible:ring-orange-700 w-[50%] my-5 ring-2 ring-orange-700"
        />
        <Table className="mx-auto">
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Status</TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">s102931</TableCell>
              <TableCell>John</TableCell>
              <TableCell>Doe</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>john@doe.com</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>23</TableCell>
              <TableCell>July/12/2020</TableCell>
              <TableCell>Active</TableCell>
              <TableCell className="text-right space-x-1">
                <Button className="bg-blue-800 border-2 border-orange-700">
                  View
                </Button>
                <Button className="bg-green-800 border-2 border-orange-700">
                  Edit
                </Button>
                <Button className="bg-red-900 border-2 border-orange-700">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">s102931</TableCell>
              <TableCell>John</TableCell>
              <TableCell>Doe</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>john@doe.com</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>23</TableCell>
              <TableCell>July/12/2020</TableCell>
              <TableCell>Active</TableCell>
              <TableCell className="text-right space-x-1">
                <Button
                  className="bg-blue-300 border-2 border-orange-100"
                  onClick={openDialog}
                >
                  View
                </Button>
                <AddForm isOpen={isDialogOpen} closeDialog={closeDialog} />
                <Button className="bg-green-300 border-2 border-orange-100">
                  Edit
                </Button>
                <Button className="bg-red-300 border-2 border-orange-100">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <PaginationComponent />
    </>
  );
}
