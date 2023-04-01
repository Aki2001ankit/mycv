import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import {
  Education,
  Interships,
  Projects,
  SoftSkill,
  TechnicalSkill,
  Awards,
  Pors,
} from "../usefulResources/resumedata";
import { BsDot } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

const Resume = () => {
  return (
    <>
      <Box
        bg="white"
        minHeight={"100vh"}
        display={"flex"}
        flexDir="column"
        justifyContent={"space-evenly"}
        alignItems="center"
        marginTop="63px"
      >
        <VStack w={{ base: "75%", sm: "70%", md: "60%" }} display={"block"}>
          <Text
            display="block"
            fontSize={"4xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            borderBottom="3px solid teal"
            marginLeft={0}
          >
            RESUME
          </Text>
          <br />
          <Text
            display="block"
            fontSize={"2xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            marginLeft={0}
          >
            EDUCATION
          </Text>
          <br />
          {Education.map((m) => (
            <Box
              key={m.index}
              fontSize={"2xl"}
              style={{ fontFamily: "Open Sans" }}
            >
              <Text fontWeight="bold"> {m.name}</Text>
              <Text>{m.degree}</Text>
              <Text>{m.branch}</Text>
              <Text>Grade/Percentage: {m.grade}</Text>
              <Text>Passing year: {m.passingyear}</Text>
            </Box>
          ))}

          <br />
          <Text
            display="block"
            fontSize={"2xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            marginLeft={0}
          >
            INTERSHIPs
          </Text>
          <br />
          {Interships.map((m) => (
            <Box
              key={m.index}
              fontSize={"2xl"}
              style={{ fontFamily: "Open Sans" }}
            >
              <Text fontWeight="bold">
                {m.role}
                {"|"}
                {m.company}
              </Text>
              <Text fontStyle={"italic"}>{m.period}</Text>
              <Text>
                {" "}
                <Icon as={BsDot} /> {m.desc1}
              </Text>
              <Text>
                <Icon as={BsDot} /> {m.desc2}
              </Text>
            </Box>
          ))}
          <br />
          <Text
            display="block"
            fontSize={"2xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            marginLeft={0}
          >
            PROJECTs
          </Text>
          <br />
          {Projects.map((m) => (
            <Box
              key={m.index}
              fontSize={"2xl"}
              style={{ fontFamily: "Open Sans" }}
            >
              <Text fontWeight="bold">
                {m.role}
                {"|"}
                {m.company}
              </Text>
              <Text fontStyle={"italic"}>{m.period}</Text>

              <Text>
                <Icon as={BsDot} /> {m.desc1}
              </Text>
              {m.desc2 ? (
                <Text>
                  <Icon as={BsDot} /> {m.desc2}
                </Text>
              ) : (
                <></>
              )}

              {m.desc3 ? (
                <Text>
                  <Icon as={BsDot} /> {m.desc3}
                </Text>
              ) : (
                <></>
              )}

              {m.desc4 ? (
                <Text>
                  <Icon as={BsDot} /> {m.desc4}
                </Text>
              ) : (
                <></>
              )}
            </Box>
          ))}
          <br />
          <Text
            display="block"
            fontSize={"2xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            marginLeft={0}
          >
            Soft Skills
          </Text>
          <br />
          {SoftSkill.map((m) => (
            <Box
              key={m.index}
              fontSize={"2xl"}
              style={{ fontFamily: "Open Sans" }}
            >
              <Text>
                <Icon as={BsDot} /> {m.data}
              </Text>
            </Box>
          ))}
          <br />
          <Text
            display="block"
            fontSize={"2xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            marginLeft={0}
          >
            Technical Skills
          </Text>
          <br />
          {TechnicalSkill.map((m) => (
            <Box
              key={m.index}
              fontSize={"2xl"}
              style={{ fontFamily: "Open Sans" }}
            >
              <Text>
                <Icon as={BsDot} /> {m.data}
              </Text>
            </Box>
          ))}
          <br />
          <Text
            display="block"
            fontSize={"2xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            marginLeft={0}
          >
            Awards / Scholarships / Academic Achievement
          </Text>
          <br />
          {Awards.map((m) => (
            <Box
              key={m.index}
              fontSize={"2xl"}
              style={{ fontFamily: "Open Sans" }}
            >
              <Text>
                <Icon as={BsDot} /> {m.data}
              </Text>
            </Box>
          ))}
          <br />
          <Text
            display="block"
            fontSize={"2xl"}
            fontWeight="bold"
            style={{ fontFamily: "Poppins" }}
            alignItem="left"
            alignSelf="left"
            marginLeft={0}
          >
            Positions of Responsibility & Extra Curriculars
          </Text>
          <br />
          {Pors.map((m) => (
            <Box
              key={m.index}
              fontSize={"2xl"}
              style={{ fontFamily: "Open Sans" }}
            >
              <Text fontWeight="bold">
                {m.name}
                {"|"}
                {m.organisation}
              </Text>
              <Text fontStyle={"italic"}>{m.period}</Text>
              <Text>
                <Icon as={BsDot} /> {m.desc1}
              </Text>
              <Text>
                <Icon as={BsDot} /> {m.desc2}
              </Text>
            </Box>
          ))}
          <br />
        </VStack>
      </Box>
    </>
  );
};
export default Resume;
