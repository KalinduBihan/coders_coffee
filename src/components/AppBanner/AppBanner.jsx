import React from "react";
import bannerImg from "../../assets/coffee-cover.jpg";
import AppStroreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-center sm:px-20"
            >
              Stay connected with Coders Coffee on the go. Get instant access to
              exclusive content, events, and updates directly from your mobile
              device. Download now and never miss a moment
            </motion.p>
            {/* image link */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              className="flex justify-center items-center gap-4"
            >
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={AppStroreImg} alt="" />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={PlayStoreImg} alt="" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
