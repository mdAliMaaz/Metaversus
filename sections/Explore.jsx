'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* TYPING TEXT */}
        <TypingText title="| The Word" textStyles="text-center" />
        {/* TITLE TEXT */}
        <TitleText title={<>Chooose the word you want <br className="md:block hidden" /> to Explore</>} textStyles="text-center" />
        <div className=" mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((item, index) => (
            <ExploreCard key={item.id} {...item} index={index} active={active} handleClick={setActive} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
