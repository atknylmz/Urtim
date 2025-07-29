import { useState } from "react";

export default function SignNReg() {
  const [role, setRole] = useState("user"); // "admin" | "user"

  return (
    <>
      <div className="pr-24">
        <h1 className="text-5xl font-bold text-white">
          Urtim Akademiye Hoş Geldiniz!
        </h1>
        <p className="py-6 text-white text-xl">
          Burada Canias İle ilgili öğrenmek istediklerinizi videolu şekilde
          bulabilirsiniz.
        </p>
      </div>
      <div className="card bg-white w-96 h-128 max-w-sm shrink-0 shadow-2xl rounded-lg ">
        <div className="w-96 max-w-sm mb-4">
          <div className="join w-full">
            <button
              type="button"
              className={`btn join-item w-48 bg-blue-600 text-white text-xl rounded-tl-lg ${
                role === "admin" ? "" : "btn-active"
              }`}
              onClick={() => setRole("admin")}>
              Yönetici Girişi
            </button>
            <button
              type="button"
              className={`btn join-item w-48.5 bg-blue-600 text-white text-xl rounded-tr-lg ${
                role === "user" ? "" : "btn-active"
              }`}
              onClick={() => setRole("user")}>
              Kullanıcı Girişi
            </button>
          </div>
          <div className="pt-2 text-sm text-gray-600">
            Seçili rol:{" "}
            <span className="font-medium">
              {role === "admin" ? "Yönetici" : "Kullanıcı"}
            </span>
          </div>
        </div>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-xl text-black">E-posta</label>
            <input
              type="email"
              className="input bg-white border-black text-black"
            />
            <label className="label text-xl text-black mt-2">Şifre</label>
            <input
              type="password"
              className="input bg-white border-black text-black"
            />
            <div className="mt-3">
              <a className="link link-hover text-lg text-black ">
                Şifreni mi unuttun?
              </a>
            </div>
            <button className="btn btn-outline btn-info mt-4">Giriş Yap</button>
            <button className="btn bg-white text-black border-black mt-1">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Login with Google
            </button>{" "}
            <button className="btn bg-[#2F2F2F] text-white border-black mt-1">
              <svg
                aria-label="Microsoft logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path d="M96 96H247V247H96" fill="#f24f23"></path>
                <path d="M265 96V247H416V96" fill="#7eba03"></path>
                <path d="M96 265H247V416H96" fill="#3ca4ef"></path>
                <path d="M265 265H416V416H265" fill="#f9ba00"></path>
              </svg>
              Login with Microsoft
            </button>
          </fieldset>
        </div>
      </div>
    </>
  );
}
