

const Register = () => {
    return (
        <section className="py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden ">
                <div className="mb-10 text-center md:mb-16">Register</div>
                <form>
                  <div className="mb-6">
                    <input type="text" placeholder="Name"></input>
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">error</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <input type="email" placeholder="Email"></input>
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">error</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <input type="password" placeholder="Password"></input>
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">error</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <input type="password" placeholder="Password Confirmation"></input>
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">error</span>
                    </div>
                  </div>
                  <div className="mb-10">
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                    >
                      Register
                    </button>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Register