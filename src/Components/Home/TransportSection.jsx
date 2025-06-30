import { motion } from "framer-motion";
import { useContext } from "react";
import { FaBus, FaTrain, FaPlane } from "react-icons/fa";
import { Theme } from "../../Context/Theme";

export default function TransportSection() {
    const [isDark,changetheme] = useContext(Theme)
  return (
    <section id="TransportSection" className={`${isDark?"bg-neutral-900 text-neutral-50":"bg-neutral-100 text-neutral-900"}  py-12 px-6 md:px-20`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center ">
        Transportation and Connectivity
        </h2>

        <div className="space-y-8 ">

          {/* Road Section */}
          <div className="flex items-start gap-4">
            <FaBus className="text-3xl text-blue-600 mt-1" />
            <div>
              <h3 className= {` text-xl font-semibold mb-1`}>By Road</h3>
              <p className={isDark?"text-neutral-300":"text-neutral-700"}>
                A good road network links Renusagar to major cities. It lies about <strong>200 km south of Mirzapur</strong> via a four-lane highway and approximately <strong>150–160 km from Varanasi</strong>. Bus services and private taxis run regularly.
              </p>
            </div>
          </div>

          {/* Rail Section */}
          <div className="flex items-start gap-4">
            <FaTrain className="text-3xl text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">By Rail</h3>
              <p className={isDark?"text-neutral-300":"text-neutral-700"}>
                The nearest station is <strong>Anpara</strong> (15–20 km away) on the Renukoot–Jharsuguda line. <br />
                For better connectivity, residents prefer <strong>Renukoot Station</strong> (35 km away), with direct trains to Delhi, Kolkata, Ranchi, Amritsar, and other major cities.
              </p>
            </div>
          </div>

          {/* Air Section */}
          <div className="flex items-start gap-4">
            <FaPlane className="text-3xl text-red-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">By Air</h3>
              <p className={isDark?"text-neutral-300":"text-neutral-700"}>
                The closest commercial airport is <strong>Varanasi (Babatpur)</strong>, about 160 km away. <br />
                Hindalco also operates a <strong>private airstrip at Mayurpur</strong> (near Renukoot) for company flights.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
