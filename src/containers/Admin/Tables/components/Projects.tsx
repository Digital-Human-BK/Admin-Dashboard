// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from '@chakra-ui/react'

// Custom components
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'
import TablesProjectRow from 'components/Tables/TablesProjectRow'

interface ProjectsProps {
  title: string
  captions: string[]
  data: {
    logo: any
    name: string
    members: string[]
    budget: string
    progression: number
  }[]
}

const Projects = ({ title, captions, data }: ProjectsProps) => {
  const textColor = useColorModeValue('gray.700', 'white')
  return (
    <Card my="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
      <CardHeader p="6px 0px 22px 0px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px">
              {captions.map((caption, index) => {
                return (
                  <Th
                    color="gray.400"
                    key={caption}
                    ps={index === 0 ? '0px' : ''}
                  >
                    {caption}
                  </Th>
                )
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row: any) => {
              return (
                <TablesProjectRow
                  key={row.name}
                  name={row.name}
                  logo={row.logo}
                  status={row.status}
                  budget={row.budget}
                  progression={row.progression}
                />
              )
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default Projects
