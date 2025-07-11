import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/ui/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className=" container remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          {/* logo  */}
          <div className="relative h-10 w-[120px] mb-12">
            <Image
              src="/assets/icons/logo-full.svg"
              alt="logo"
              height={1000}
              width={1000}
              className="mb-12 h-10 w-fit"
            />
          </div>

          {/* patient login form */}
          <PatientForm />

          {/* footer */}
          <div className="text-14-regular mt-20 justify-between flex">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 CarePulse
            </p>

            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
