"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import NewAppointmentForm from "./forms/NewAppointmentForm";
import { Appointment } from "@/types/appwrite.types";
const AppointmentModal = ({
  type,
  patientId,
  userId,
  appointment,
}: {
  type: "schedule" | "cancel";
  patientId: string;
  userId: string;
  appointment: Appointment;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className={`capitalize ${type === "schedule" && "text-green-500"}`}
          >
            {type}
          </Button>
        </DialogTrigger>

        <DialogContent className="shad-dialog sm:max-w-md">
          <DialogHeader className="mb-4 space-y-3">
            <DialogTitle className="capitalize">{type} appointment</DialogTitle>
            <DialogDescription>
              Fill in deatils to {type} an appointment
            </DialogDescription>
          </DialogHeader>

          <NewAppointmentForm
            userId={userId}
            patientId={patientId}
            type={type}
            appointment={appointment}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppointmentModal;
