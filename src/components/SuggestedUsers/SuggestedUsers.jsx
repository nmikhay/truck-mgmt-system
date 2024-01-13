import { Box, Flex, Text, VStack, Link} from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return <VStack  py={8} px={6} gap={4}>

<SuggestedHeader />
<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"} >
<Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
						Suggested for you
					</Text>
					<Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
						See All
					</Text>
</Flex>
<SuggestedUser name="Ron Wheesley" followers={250} avatar={'https:/bit.ly/dan-abramov'} />
<SuggestedUser name={"Harry Potter"} followers={41} avatar={'https:/bit.ly/code-beast'} />
<SuggestedUser name={"Hermione"} followers={12} avatar={'https:/bit.ly/ryan-florence'} />
<Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
				© 2024 Built By{" "}
				<Link href='https://github.com/nmikhay' target='_blank' color='blue.500' fontSize={14}>
					Nadia Mikhaylova
				</Link>
			</Box>

  </VStack>
}

export default SuggestedUsers