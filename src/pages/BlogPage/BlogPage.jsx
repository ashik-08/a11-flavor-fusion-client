import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const BlogPage = () => {
  const [open, setOpen] = useState(0);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="pt-28 md:pt-32 lg:pt-36">
      <h1 className="text-center text-head text-2xl md:text-4xl font-metal font-semibold mb-8 md:mb-12 lg:mb-14 xl:mb-16">
        Question & Answer
      </h1>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        animate={CUSTOM_ANIMATION}
        className="mb-2 rounded-lg border border-blue-gray-100 px-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`transition-colors ${
            open === 1 ? "text-saffron hover:!text-saffron" : "border-b-1"
          }`}
        >
          What is One way data binding?
        </AccordionHeader>
        <AccordionBody className="text-base leading-8 font-normal px-2 py-10 md:px-5 xl:px-7">
          One-way data binding is a programming concept in which the data flow
          occurs in a single direction, typically from a data source (like a
          model or state) to a user interface element (such as a view or
          component). In this approach, changes in the data source automatically
          update the corresponding UI elements, but the reverse is not
          true—changes in the UI elements do not affect the original data
          source. <br /> <br />
          In a one-way data binding model: <br /> <br />
          1. <b>Data Source (Model/State):</b> This is where your
          application&apos;s data is stored or managed. It could be a variable,
          an object, or a more complex data structure. <br />
          2. <b>User Interface (View/Component):</b> This represents the visual
          representation of your application. It could be a webpage, a UI
          component, or any other display. <br />
          3. <b>Data Flow Direction:</b> The data flows only from the data
          source to the user interface. When the data in the source changes, it
          automatically reflects in the UI. <br />
          4. <b>Example Scenario:</b> In a React or Angular application, if you
          have a variable <b>&apos; name &apos;</b> in your component&apos;s
          state, and you display it in a paragraph element in your UI, any
          change in the
          <b>&apos; name &apos;</b> variable will automatically update the
          displayed name in the UI. However, if you change the displayed name in
          the UI, it won&apos;t affect the original <b>&apos; name &apos;</b>{" "}
          variable unless explicitly handled. <br /> <br />
          One-way data binding simplifies the application architecture and makes
          it easier to understand the flow of data. It is often contrasted with
          two-way data binding, where changes in the UI can also update the
          original data source.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        animate={CUSTOM_ANIMATION}
        className="mb-2 rounded-lg border border-blue-gray-100 px-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`transition-colors ${
            open === 2 ? "text-saffron hover:!text-saffron" : "border-b-1"
          }`}
        >
          What is NPM in node.js?
        </AccordionHeader>
        <AccordionBody className="text-base leading-8 font-normal px-2 py-10 md:px-5 xl:px-7">
          NPM, or Node Package Manager, is the default package manager for
          Node.js. It is a command-line tool that allows developers to easily
          manage and share libraries (packages) of code written in JavaScript.
          NPM plays a crucial role in the Node.js ecosystem, enabling developers
          to: <br /> <br />
          1. <b>Package Installation:</b> NPM simplifies the process of
          installing external libraries or packages into a Node.js project.
          Developers can specify project dependencies in a file named{" "}
          <b>&apos; package.json &apos;</b>, and NPM will automatically download
          and install those dependencies. <br />
          2. <b>Dependency Management:</b> NPM helps manage project dependencies
          by keeping track of the packages used, their versions, and their
          dependencies. This ensures that the application runs consistently
          across different environments. <br />
          3. <b>Version Management:</b>
          NPM allows developers to specify the versions of packages needed for
          their projects. This ensures that everyone working on the project uses
          the same versions of libraries, reducing potential compatibility
          issues. <br />
          4. <b>Script Execution:</b> NPM allows developers to define and run
          scripts associated with their projects. Common scripts include tasks
          like running tests, building the project, or starting a development
          server.
          <br />
          5. <b>Package Publishing:</b> Developers can publish their own
          packages to the NPM registry, making them available for others to use.
          This fosters collaboration and code sharing within the Node.js
          community. <br />
          6. <b>Global Package Installation:</b> NPM enables the installation of
          packages globally, making them available as command-line tools. This
          is particularly useful for utilities and tools that developers want to
          use across different projects. <br /> <br />
          To use NPM, developers typically interact with it through the command
          line. Common commands include <b>&apos; npm install &apos;</b> to
          install dependencies, <b>&apos; npm init &apos;</b> to initialize a
          new <b>&apos; package.json &apos;</b> file, and{" "}
          <b>&apos; npm publish &apos;</b> to publish a package. The NPM
          registry hosts a vast collection of open-source packages that
          developers can leverage to enhance their Node.js applications.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        animate={CUSTOM_ANIMATION}
        className="mb-2 rounded-lg border border-blue-gray-100 px-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`transition-colors ${
            open === 3 ? "text-saffron hover:!text-saffron" : "border-b-1"
          }`}
        >
          What is the difference between Mongodb database vs mySQL database?
        </AccordionHeader>
        <AccordionBody className="text-base leading-8 font-normal px-2 py-10 md:px-5 xl:px-7">
          MongoDB and MySQL are both popular database management systems, but
          they differ in their data models, schema flexibility, query language,
          and use cases. Here are some key differences between MongoDB and
          MySQL: <br /> <br />
          1. <b>Data Model:</b> <br />- <b>MongoDB:</b> MongoDB is a NoSQL
          database, and it stores data in a flexible, JSON-like format known as
          BSON (Binary JSON). It uses a document-oriented data model, where each
          record is a document that can have nested structures.
          <br />- <b>MySQL:</b>
          MySQL is a relational database management system (RDBMS), and it uses
          a tabular structure with predefined schemas. Data is organized into
          tables, and relationships between tables are established using foreign
          keys. <br />
          2. <b>Schema:</b> <br />- <b>MongoDB:</b> MongoDB is schema-less,
          meaning that documents in a collection do not need to have the same
          structure. Fields can be added or removed without affecting other
          documents in the same collection.
          <br />- <b>MySQL:</b> MySQL is schema-based, requiring a predefined
          schema that specifies the tables, fields, and relationships before
          data is inserted. Changes to the schema can be more complex and may
          involve altering existing tables.
          <br />
          3. <b>Query Language:</b> <br />- <b>MongoDB:</b> MongoDB uses a query
          language that is similar to JSON. It supports rich queries and
          indexing, and it provides powerful aggregation framework for data
          processing.
          <br />- <b>MySQL:</b> MySQL uses SQL (Structured Query Language), a
          powerful language for querying relational databases. SQL is
          well-established and widely used in the industry. <br /> <br />
          Choosing between MongoDB and MySQL depends on the specific
          requirements of the project, including the nature of the data,
          scalability needs, and the development team&apos;s familiarity with
          each technology.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

BlogPage.propTypes = {
  id: PropTypes.any,
  open: PropTypes.any,
};

export default BlogPage;
