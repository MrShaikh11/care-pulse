import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
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
          <RegisterForm user={user} />

          <p className="copyright py-12">© 2025 CarePulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
