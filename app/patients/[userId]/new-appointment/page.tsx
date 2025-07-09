import NewAppointmentForm from "@/components/forms/NewAppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import { Appointment } from "@/types/appwrite.types";
import Image from "next/image";
export const defaultAppointment: Appointment = {
  $id: "",
  $collectionId: "",
  $databaseId: "",
  $createdAt: "",
  $updatedAt: "",
  $permissions: [],
  patient: {
    $id: "",
    $collectionId: "",
    $databaseId: "",
    $createdAt: "",
    $updatedAt: "",
    $permissions: [],
    userId: "",
    name: "",
    email: "",
    phone: "",
    birthDate: new Date(),
    gender: "male",
    address: "",
    occupation: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    primaryPhysician: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    allergies: "",
    currentMedication: "",
    familyMedicalHistory: "",
    pastMedicalHistory: "",
    identificationType: "",
    identificationNumber: "",
    identificationDocument: new FormData(),
    treatmentConsent: false,
    disclosureConsent: false,
    privacyConsent: false,
  },
  primaryPhysician: "",
  schedule: new Date(),
  reason: "",
  note: "",
  cancellationReason: "",
  status: "pending",
  userId: "",
};

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className=" container remove-scrollbar">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <div className="relative h-10 w-[120px] mb-12">
            <Image
              src="/assets/icons/logo-full.svg"
              alt="logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <NewAppointmentForm
            patientId={patient.$id}
            type="create"
            userId={userId}
            appointment={defaultAppointment}
          />

          <p className="copyright py-12">© 2025 CarePulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default NewAppointment;
