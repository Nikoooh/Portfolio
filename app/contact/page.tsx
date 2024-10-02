
const ContactPage: React.FC = (): JSX.Element => {
  return ( 
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap justify-center gap-10 py-44 px-20 bg-cover bg-center bg-contact-page-hero min-h-[100vh] shadow-2xl text-white">
        <div className="md:w-1/3">
          <p className="text-6xl">Contact</p>
        </div>
        <div className="md:w-1/3">
          <div className="bg-zinc-600 bg-opacity-20 shadow-2xl rounded-2xl p-10 text-2xl">
            <div>
              <p className="underline text-4xl">Want to get in touch with me?</p>
            </div>
            <div className="mt-6">
              <p>Email: nikotoivanen1999@gmail.com</p>
              <p>Phone: +0458858081</p>  
            </div>   
            <div className="mt-6">
              <p>Please use phone only if i have not answered email within 2 days.</p>
            </div>                
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage