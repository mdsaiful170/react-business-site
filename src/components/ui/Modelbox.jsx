import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import { Eye, EyeOff, UserRound } from "lucide-react";

import { useState } from "react";
import { ButtonTag } from "../material/ButtonTag";
import { useLocation } from "react-router-dom";

const Modelbox = () => {
  const [isOpenModelbox, setModelbox] = useState(false);
  const ModalOpen = () => setModelbox(true);
  const ModalClose = () => setModelbox(false);
  const [inputType, setinputType] = useState("password");
  const location =useLocation()
  const path = () => {
    return location.pathname === "/club" ? "text-white" : "text-secondary";
  };
  const InputHander = () => {
    if (inputType === "password") {
      setinputType("text");
    } else {
      setinputType("password");
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          onPress={ModalOpen}
          variant="light"
          disableAnimation={true}
          className={`${path()} text-lg font-medium hover:!opacity-100`}
        >
          <UserRound className={`${path()}`} size={22} strokeWidth={2} />
          Account{" "}
        </Button>
      </div>

      <Modal
        isOpen={isOpenModelbox}
        backdrop="blur"
        size="4xl"
        onClose={ModalClose}
        placement="top"
      >
        <ModalContent className="p-0 m-4">
          <ModalBody className="px-0 py-0 overflow-y-auto">
            <div className="flex lg:flex-row flex-col overflow-y-auto md:overflow-visible w-full ">
              <div className="bg-gradientwithimg h-screen ps-4 md:ps-6 lg:ps-8 w-full flex flex-col flex-1 md:w-2/5  bg-center bg-cover bg-no-repeat  py-14 ">
                <h3 className="text-4xl md:5xl font-bold text-white  ">
                  singUp
                </h3>
                <p className="text-base text-white font-medium pt-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae nesciunt exercitationem molestiae cum eos dolorum
                  accusantium architecto nisi nulla iste quasi placeat fugiat
                  ratione, officiis voluptatum eligendi laborum, quidem
                  reiciendis.
                </p>
              </div>

              <div className="w-full md:w-[60%] p-4">
                <div>
                  <img
                    src="./logo.svg"
                    className="w-fit mx-auto max-w-full pb-5"
                    alt=""
                  />
                </div>
                <h3 className="text-secondary font-bold text-3xl ">
                  Sign up and get exploring!
                </h3>
                <p className="text-secondary font-normal pt-2 pb-3">
                  Already have an account? Sign In{" "}
                  <a href="#singup" className="text-primary">
                    singUp
                  </a>
                </p>

                <div className="space-y-3">
                  <ButtonTag
                    className={
                      "w-full bg-transparent text-secondary  hover:bg-gray-100 border border-stone-300 py-6"
                    }
                    startContent={
                      <>
                        <img src="./google.svg" alt="" />
                      </>
                    }
                  >
                    Sign Up with Google
                  </ButtonTag>
                  <ButtonTag
                    className={
                      "w-full bg-transparent text-secondary  hover:bg-gray-100 border border-stone-300 py-6 ps-10"
                    }
                    startContent={
                      <>
                        <img src="./facebook.svg" alt="" />
                      </>
                    }
                  >
                    Sign Up with Facebook
                  </ButtonTag>
                  <ButtonTag
                    className={
                      "w-full bg-transparent  text-secondary  hover:bg-gray-100 border border-stone-300 py-6 ps-2"
                    }
                    startContent={
                      <>
                        <img src="./apple.svg" alt="" />
                      </>
                    }
                  >
                    Sign Up with Apple
                  </ButtonTag>
                </div>
                <div className="flex items-center gap-x-3 pt-3">
                  <span className="flex-grow h-[1px] bg-secondary/50"></span>
                  <p className="text-base font-medium text-secondary">
                    or continue with
                  </p>
                  <span className="flex-grow h-[1px] bg-secondary/50"></span>
                </div>
                <form action="" className="pt-4">
                  <div className="">
                    <label className="text-base block font-medium text-secondary ms-1 mb-1">
                      username
                    </label>
                    <input
                      type="text"
                      className={` ${location.pathname === '/club' ? "text-secondary":""} outline-none  w-full border border-slate-100 rounded-lg px-3 py-[10px] text-base font-semibold bg-[#F5FAFF] placeholder:text-base placeholder:font-medium placeholder:text-[#969DAA]`}
                      placeholder="e.g. johndoe@email.com"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="text-base block font-medium text-secondary ms-1 mb-1">
                      Password
                    </label>
                    <div className="flex items-center border border-slate-100 rounded-lg w-full px-3 h-[46px]  text-base font-semibold bg-[#F5FAFF]">
                      <input
                        type={inputType === "password" ? "password" : "text"} 
                        className={` ${location.pathname === '/club' ? "text-secondary":""} outline-none w-full h-full  placeholder:text-base bg-transparent   placeholder:font-medium placeholder:text-[#969DAA]`}
                        placeholder="enter your password"
                      />
                      {inputType === "password" ? (
                        <Eye
                          size={20}
                          className="cursor-pointer"
                          color="#656B89"
                          strokeWidth={2}
                          onClick={InputHander}
                        />
                      ) : (
                        <EyeOff
                          size={20}
                          className="cursor-pointer"
                          color="#656B89"
                          strokeWidth={2}
                          onClick={InputHander}
                        />
                      )}
                    </div>
                  </div>

                  <ButtonTag className={"bg-primary py-6 w-full  mt-5"}>
                    Sing Up
                  </ButtonTag>

                  <p className="pt-2 text-center text-xs font-medium ">
                    By creating an account, you agree to our{" "}
                    <a href="#" className="text-primary">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary">
                      Privacy Policy.
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modelbox;
