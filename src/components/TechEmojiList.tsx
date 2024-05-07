import { HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone} from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons'
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
interface Props {
    techStack: string[]
}

const TechEmojiList = ({techStack}: Props) => {

    const iconMap: {[key: string]: IconType} = {
        python: FaPython,
        php: FaPhp,
        html: FaHtml5,
        css: BiSolidFileCss,
        sql: PiFileSql
    }

    return (
    <HStack marginY={1} >
     {techStack.map((tech) => (<Icon key={tech} as={iconMap[tech]} color='gray.500' boxSize={5}/> ))}
    </HStack>
  )
}

export default TechEmojiList