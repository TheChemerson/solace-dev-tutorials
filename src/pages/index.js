import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col, Card } from "react-bootstrap"

const SamplesIndex = ({ data }) => {
  const samples = data.allTutorialsYaml.edges

  return (
    <Layout>
      <section id="intro">
        <Container className="pt6 pb5">
          <Row className="tc">
            <Col>
              <h1>Solace API Tutorials</h1>
              <p className="pt3 pb3 f5">
                Below are API tutorials that will help you integrate your
                <br />
                applications with Solace technologies.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="pb5">
        <Row>
          {samples.map(({ node }) => (
            <Col key={node.id} xs={12} sm={12} md={6} lg={4} xl={4}>
              <Card key={node.id} className="mt4">
                <a href={node.fields.slug}>
                  <Card.Body>
                    <Card.Title className="pa3 fw4">{node.title}</Card.Title>
                    <Card.Text className="pl3 pr3 pb2 fw1">
                      {node.summary}
                    </Card.Text>
                    <Card.Footer className="fw4">
                      Go To Tutorials <span className="icon">&#187;</span>
                    </Card.Footer>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default SamplesIndex

export const query = graphql`
  {
    allTutorialsYaml {
      edges {
        node {
          id
          summary
          title
          fields {
            slug
          }
        }
      }
    }
  }
`
