import LoadingMessage from "./loadingMessage";
import Spinner from "./Spinner";

const addressObj = {
  ip: "",
  location: "",
  timezone: "",
  isp: "",
}
addressObj();

const Address = (address, loading, success, error) => {
  return (
    <>
      <section className="absolute mx-auto left-0 right-0 max-w-sm md:max-w-xl lg:max-w-5xl top-[20rem] bg-white rounded-[1rem] shadow-md">
        {loading && (
          <div className="flex gap-4 items-center">
            <Spinner />
            <LoadingMessage />
          </div>
        )}
        {!loading && error == 1 && (
          <div className="text-2xl font-bold text-center text-vDarkGray animate-bounce">
            Failed To Fetch Data. Check Domain or IP Address
          </div>
        )}
        {success && error == 0 && (
          <main className="block md:flex justify-center text-center py-12">
            <div>Address</div>
            <p>{address.ip}</p>
            <div>location</div>
            <p>{address.location}</p>
            <div>Timezone</div>
            <p>{address.timezone}</p>
            <div>ISP</div>
            <p>{address.ISP}</p>
          </main>
        )}
      </section>
    </>
  );
};

export default Address;


//The address component needs to have three states: the loading state, the rendered address, and an error state
// eslint-disable-next-line no-unused-vars