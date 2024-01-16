import LoadingMessage from "./loadingMessage";
import Spinner from './Spinner'

//The address component needs to have three states: the loading state, the rendered address, and an error state
// eslint-disable-next-line no-unused-vars
const Address = (address, loading, error) => {
  return (
    <>
      <section className="absolute mx-auto left-0 right-0 max-w-sm md:max-w-xl lg:max-w-5xl top-[20rem] bg-white rounded-[1rem] shadow-md">
        {/* define loading states and error boundaries */}
        {loading && (
          <div className="flex gap-4 items-center">
            <Spinner/>
            <LoadingMessage />
          </div>
        )}
        <main className="block md:flex justify-center text-center py-12">
          <div>Address</div>
          <div>location</div>
          <div>Timezone</div>
          <div>ISP</div>
        </main>
      </section>
    </>
  );
};

export default Address;
