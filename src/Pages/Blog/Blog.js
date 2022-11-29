import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What are the different ways to manage a state in a React
                    application?
                  </summary>

                  <span>
                    <span className="font-semibold text-yellow-600">
                      1. Local state
                    </span>{" "}
                    <br />
                    Local state is data we manage in one or another component.
                    Local state is most often managed in React using the
                    useState hook. For example, local state would be needed to
                    show or hide a modal component or to track values for a form
                    component, such as form submission, when the form is
                    disabled and the values of a form’s inputs.
                    <br />
                    <br />
                    <span className="font-semibold text-yellow-600 ">
                      2. Global state
                    </span>
                    <br />
                    Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update
                    data anywhere in our app, or in multiple components at
                    least. A common example of global state is authenticated
                    user state. If a user is logged into our app, it is
                    necessary to get and change their data throughout our
                    application. Sometimes state we think should be local might
                    become global.
                    <br />
                    <br />
                    <span className="text-semibold text-yellow-600">
                      3. Server state
                    </span>
                    <br />
                    Data that comes from an external server that must be
                    integrated with our UI state. Server state is a simple
                    concept, but can be hard to manage alongside all of our
                    local and global UI state. There are several pieces of state
                    that must be managed every time you fetch or update data
                    from an external server, including loading and error state.
                    Fortunately there are tools such as SWR and React Query that
                    make managing server state much easier.
                    <br />
                    <br />
                    <span className="font-semibold text-yellow-600">
                      4. URL state
                    </span>
                    <br />
                    Data that exists on our URLs, including the pathname and
                    query parameters. URL state is often missing as a category
                    of state, but it is an important one. In many cases, a lot
                    of major parts of our application rely upon accessing URL
                    state. Try to imagine building a blog without being able to
                    fetch a post based off of its slug or id that is located in
                    the URL! There are undoubtedly more pieces of state that we
                    could identify, but these are the major categories worth
                    focusing on for most applications you build.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How does prototypical inheritance work?
                  </summary>

                  <span>
                    The Prototypal Inheritance is a feature in javascript used
                    to add methods and properties in objects. It is a method by
                    which an object can inherit the properties and methods of
                    another object. Traditionally, in order to get and set the
                    [[Prototype]] of an object, we use Object. getPrototypeOf
                    and Object.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is a unit test? Why should we write unit tests?
                  </summary>

                  <span className="px-4 py-2">
                    <span className="font-semibold text-yellow-600">
                      Unit Test:
                    </span>
                    <br />
                    The main objective of unit testing is to isolate written
                    code to test and determine if it works as intended. Unit
                    testing is an important step in the development process,
                    because if done correctly, it can help detect early flaws in
                    code which may be more difficult to find in later testing
                    stages.
                    <br />
                    <br />
                    <span className="font-semibold text-yellow-600">
                      Write unit tests:
                    </span>
                    <br />
                    Unit testing ensures that all code meets quality standards
                    before it's deployed. This ensures a reliable engineering
                    environment where quality is paramount. Over the course of
                    the product development life cycle, unit testing saves time
                    and money, and helps developers write better code, more
                    efficiently.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    React vs. Angular vs. Vue?
                  </summary>

                  <span className="px-4 py-2">
                    <span className="font-semibold text-yellow-600">
                      React vs Angular
                    </span>
                    <br />
                    If the choice you’re making is based on Angular vs React
                    alone, then you’ll simply need to consider the pros and cons
                    discussed for those libraries in this post. But overall,
                    keep in mind that both libraries can be used for mobile and
                    web apps, while Angular is generally better for more complex
                    apps that are enterprise-ready. React often requires extra
                    modules and components, which keeps the core library small,
                    but means there’s extra work involved when incorporating
                    outside tools. Angular, on the other hand, is more of a
                    full-fledged solution that doesn’t require extras like React
                    often does, though it does have a steeper learning curve for
                    its core compared to React. React is more suitable for
                    intermediate to advanced JavaScript developers who are
                    familiar with concepts from ES6 and up, while Angular favors
                    those same developers who are also familiar with TypeScript.
                    <br />
                    <br />
                    <span className="font-semibold text-yellow-600">
                      Angular vs Vue
                    </span>
                    <br />
                    In most cases, you probably wouldn’t be deciding between
                    only Angular and Vue. They are vastly different libraries
                    with very different feature sets and learning curves. Vue is
                    the clear choice for less experienced developers, and
                    Angular would be preferred for those working on larger apps.
                    A large library like Angular would require more diligence in
                    keeping up with what’s new, while Vue would be less
                    demanding in this regard and the fact that the two most
                    recent major releases of Vue are in separate repositories
                    helps. It should also be noted that Vue was created by a
                    developer who formerly worked on Angular for Google, so
                    that’s another thing to keep in mind, though that wouldn’t
                    have a huge impact on your decision.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
