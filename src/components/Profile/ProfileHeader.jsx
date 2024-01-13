import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

function ProfileHeader() {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row"}}>
      <AvatarGroup  size={{ base: "xl", md: "2xl" }} 
      justifySelf={"center"} 
      alignSelf={"flex-start"} 
      mx={"auto"}>
        <Avatar name ='Nadia Mikhaylova' src='/profilepic.png' alt='Nadia Mikhaylova' />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
        gap={4}
        direction={{ base: "column", sm: "row" }}
        justifyContent={{ base: "center", sm: "flex-start" }}
        alignItems={"center"}
        w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>oh_nadia</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
            g={"blue.500"}
            color={"white"}
            _hover={{ bg: "blue.600" }}
            size={{ base: "xs", md: "sm" }}
            >
              Edit profile
            </Button>
          </Flex>
        </Flex>
        <Flex  alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "sm", md: "lg" }}>
            <Text as='span' fontWeight={"bold"} mr={1}>4</Text>
            Posts
          </Text>
          <Text>
            <Text as='span' fontWeight={"bold"} mr={1}>145</Text>
            Followers
          </Text>
          <Text>
            <Text as='span' fontWeight={"bold"} mr={1}>15</Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
					<Text fontSize={"sm"} fontWeight={"bold"}>
            Nadia Mikhaylova
					</Text>
				</Flex>
        <Text fontSize={"sm"} >
            Best female programer in town
					</Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader