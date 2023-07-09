import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  Avatar
} from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import UniLogo from '../assets/images/utn.svg';

function Company({
  title,
  role,
  skills,
  period,
  logo,
  colorMode,
  alt,
  isEducation = false
}) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            width={{
              sm: '4rem',
              md: '14'
            }}
            height={{
              sm: isEducation ? '4rem' : 'auto',
              md: 'auto'
            }}
            objectFit="cover"
            src={logo}
            alt={alt}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {title}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {role}
              <Text
                display={['block', 'none', 'none', 'none']}
                fontSize={14}
                color={`mode.${colorMode}.career.subtext`}
              >
                {period}
              </Text>
            </Heading>
          </Stack>
        </Flex>
        <Stack display={['none', 'flex', 'flex', 'flex']}>
          <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
            {period}
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={2} mt={3} isInline alignItems="center">
        {skills.split(',').map(skill => (
          <Tag
            size="sm"
            padding="0 3px"
            key={skill}
            color="#4299E1"
            fontWeight="bold"
            color={`mode.${colorMode}.career.subtext`}
            bgColor={`mode.${colorMode}.career.tagBG`}
          >
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}

const About = () => {
  const { colorMode } = useColorMode();
  const companies = [
  
  ];
  return (
    <Stack
      as="main"
      padding="1.5rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      <Stack spacing={2} marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`} display="flex">
          Hi, I'm Michael{' '}
        </Heading>
        <Stack as="flex" flexDirection="row" alignItems="center">
          <Box>
            <Text color={`mode.${colorMode}.subtext`}>
              I am a Android Developer, an open source lover.
            </Text>
          </Box>
          <Box mb="3">
            <Avatar
              ml="2"
              size="sm"
              borderRadius="0"
              backgroundColor="transparent"
              name="Pakistan Flag"
              src="https://www.flaticon.com/premium-icon/icons/svg/1863/1863138.svg"
            />
          </Box>
        </Stack>
        <Text color={`mode.${colorMode}.subtext`}>
          This is my digital garden, where I write about the things I'm working
          on and share what I've learned.
        </Text>
      </Stack>
      <Stack marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`}>Skills</Heading>
        <Stack
          padding={4}
          borderLeft="4px solid"
          borderColor={`mode.${colorMode}.skills.border`}
          color={`mode.${colorMode}.career.subtext`}
          _hover={{ shadow: 'md' }}
          backgroundColor={`mode.${colorMode}.cardBG`}
          rounded="md"
          fontWeight="bold"
        >
          <Text>Kotlin, ktor, Javascript, C#, Python</Text>
          <Text>MySQL, PostgreSQL, Oracle, SQL SEVER, MongoDB</Text>
          <Text>Heroku, Amazon Web Services</Text>
          <Text>Software Architecture</Text>
        </Stack>
      </Stack>
      <Stack spacing={4} marginBottom={6}>
        <Heading color={`mode.${colorMode}.career.text`}>
          <Flex alignItems="center">
            {/* <Text as="span" color={`mode.${colorMode}.career.text`}>
              Career
            </Text> */}
            <Stack pl={3}>
              {/* <Box
                as={BsFillBriefcaseFill}
                size="25px"
                color={`mode.${colorMode}.career.subtext`}
              /> */}
            </Stack>
          </Flex>
        </Heading>
        {companies.map((company, index) => (
          <Company
            key={index}
            title={company.title}
            role={company.role}
            skills={company.skills}
            period={company.period}
            logo={company.logo}
            colorMode={colorMode}
          />
        ))}
      </Stack>
      <Stack spacing={4}>
        <Heading>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              Education
            </Text>
            <Stack pl={2}>
              <Box
                as={FaGraduationCap}
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        <Company
          title="Universidad Técnica Nacional"
          alt="Nuces image"
          role="Ingenería en Software"
          skills="Software Engineer, Web Development, Data Structures, Data Analys"
          // period="2013 - 2017"
          logo={UniLogo}
          colorMode={colorMode}
          isEducation={true}
        />
      </Stack>
    </Stack>
  );
};

export default About;
