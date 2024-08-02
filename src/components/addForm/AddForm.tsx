// import React from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
// import { Calendar } from "../ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { GenderSelect } from "./DropDown";
import { InputFieldForm } from "./InputFieldForm";

interface AddFormProps {
  isOpen: boolean;
  closeDialog: () => void;
}

export function AddForm({ isOpen, closeDialog }: AddFormProps) {
  // const [data, setData] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[425px] flex flex-col justify-between">
          <DialogHeader>
            <DialogTitle>Profile</DialogTitle>
            <DialogDescription>Data</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <InputFieldForm label="userID" />
            <InputFieldForm label="First Name" />
            <InputFieldForm label="Last Name" />
            <InputFieldForm label="Phone Number" />
            <InputFieldForm label="Email" />
            <InputFieldForm label="Age" />
            <GenderSelect />
            <>
              <Calendar captionLayout="dropdown-buttons" />
            </>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
