import React from "react";
import { motion } from "framer-motion";
import { titleVaritant } from "../Motion Variants/variant";

export const Title = React.memo(({tag, text, typeOfStyles}) => {

    let Tag = tag || "h2"

    return (
        <motion.div variants={titleVaritant} initial={'hidden'} animate={'visible'}>
            <Tag className={typeOfStyles.MainTitle}>
                {text}
            </Tag>
        </motion.div>
    )
})