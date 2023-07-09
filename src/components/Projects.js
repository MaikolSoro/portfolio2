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
  Grid,
  Skeleton,
  AspectRatio
} from '@chakra-ui/react';
import food_img from '../assets/images/Projects/food.png';
import note_img from '../assets/images/Projects/note.png';
import task_img from '../assets/images/Projects/task.png';
import book_img from '../assets/images/Projects/book.png';
import chat_img from '../assets/images/Projects/chat.png';
import tracker_img from '../assets/images/Projects/tracker.png';
import imc_img from '../assets/images/Projects/imc.png';
import product_img from '../assets/images/Projects/product.png';

function Project({ title, desc, tech, colorMode, image_url }) {
  return (
    <Stack marginBottom={5}>
      <Heading as="h4" size="md" color={`mode.${colorMode}.career.text`}>
        <Flex alignItems="center">
          <Text as="span" color={`mode.${colorMode}.career.text`}>
            {title}
          </Text>
        </Flex>
      </Heading>
      <Grid
        // templateColumns="repeat(2, 1fr)"
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={2}
        p={5}
        _hover={{ shadow: 'md' }}
        borderWidth="1px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={`mode.${colorMode}.cardBG`}
        position="relative"
        rounded="md"
      >
        <Flex w="100%" h="100%" alignItems="center">
          <AspectRatio ratio={1.85 / 1} w="100%" borderBottomWidth="1px">
            <Image
              rounded="md"
              src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
              fallback={<Skeleton />}
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <Box w="100%" marginBottom={2}>
          <Stack mt={2} pl={[0, 4, 4, 4]}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              lineHeight="short"
              color={`mode.${colorMode}.subtext`}
            >
              {desc}
            </Text>
            <Stack isInline>
              {tech.split(',').map(tag => (
                <Tag
                  size="sm"
                  padding="0 3px"
                  key={tag}
                  color="#4299E1"
                  fontWeight="bold"
                  color={`mode.${colorMode}.career.subtext`}
                  bgColor={`mode.${colorMode}.career.tagBG`}
                >
                  {tag}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

const Projects = () => {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'Food Recipes App',
      desc: `It is a Food Recipes app, where we will be able to browse recipes for different 
          types of meals and diets. 
          The design of this application is in xml.`,
      tech: 'Android, Kotlin, Xml, Retrofit',
      image_url: food_img
    },
    {
      title: 'Task App',
      desc: `Build a To-Do App using Modern Declarative UI Toolkit called Jetpack Compose 
          to Accelerate your UI and App development..`,
      tech: 'Android, Kotlin,JetpackCompose',
      image_url: task_img
    },
    {
      title: 'NoteApp',
      desc: `A sick note application in Jetpack Compose with the popular 
          clean architecture approach.`,
      tech: 'Android, Kotlin,JetpackCompose',
      image_url: note_img
    },
    {
      title: 'Book App',
      desc: `Book application using the power and simplicity of Android Jetpack Compose UI Toolkit`,
      tech: 'Android, kotlin,JeckPackCompose',
      image_url: book_img
    },
    {
      title: 'Chat App',
      desc: `With Stream Chat SDK you will be able to create a polished in-app messaging 
          experience with typing indicators, read state, attachments, reactions, user presence, 
          and threads. With Stream Chat you will be able to save lot's of time implementing the Chat in your app..`,
      tech: 'Android, Kotlin, Stream SDK, Xml',
      image_url: chat_img
    },
    {
      title: 'Tracker App',
      desc: ` Distance Tracker, and as the name suggests, 
          this application will be able to track the location of our users and 
          keep track of the distance the user travels. 
          The application will use Foreground Service and will track the users location even 
          from the background when we kill our application. 
          Simply put, you will be able to track how many kilometers you have traveled and how long it took you.`,
      tech: 'Android, Kotlin,Google Maps SDK, Xml',
      image_url: tracker_img
    },
    {
      title: 'IMC',
      desc: `With this free BMI Calculator, you can calculate and evaluate your BMI (body mass index) 
          by simply entering your age, gender, height and weight..`,
      tech: 'Android, kotlin, xml',
      image_url: imc_img
    },
    {
      title: 'ProductHunt',
      desc: `Product Hunt is a selection of the best new products, every day..`,
      tech: 'Javascript, NextJs, firebase',
      image_url: product_img
    }
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
      <Stack spacing={2}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
            colorMode={colorMode}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
