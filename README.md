<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Event Ticketing System dApp</h3>

  <p align="center">
    A decentralized application for event ticketing, ownership verification, and fraud prevention.
  </p>
</div>

## About

The Event Ticketing System is a decentralized application (dApp) powered by Cartesi rollups technology. It allows event organizers to create events and sell tickets, verifies and tracks ticket ownership, and prevents ticket fraud and scalping.

## Getting Started

Below are the instructions on how to set up this dApp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

* [nodejs](https://nodejs.org/en), [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) 
* [docker](https://docs.docker.com/get-docker/)
* [cartesi-cli](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/ellathedevgirl/event-tracking-dapp.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build and run the dApp via `cartesi-cli`
   ```sh
   cartesi build 
   ```
   and
   ```sh
   cartesi run 
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Here you can access examples of dApp communication and resource consumption.

### Advanced Handlers

* #### createEvent
  ```js
    description — create an event.
    param data — {organizer: address ("0x..."), name: string, date: string, location: string}
  ```
  data sample
  ```json
    {
        "action":"createEvent", 
        "data":{
            "organizer":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            "name":"Blockchain Conference",
            "date":"2024-09-01T12:00:00Z",
            "location":"New York"
        }
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a226372656174654576656e74222c202264617461223a7b226f7267616e697a6572223a223078663339

46643665353161616438384636463463653661423838323732373963666646623932323636222c226e616d65223a22426c6f636b636861696e20436f6e666572656e6365222c2264617465223a22323032342d30392d30315431323a30303a30305a222c226c6f636174696f6e223a224e657720596f726b227d7d
  ```

* #### getAllEvents
  ```js
    description — get all events.
  ```
  data sample
  ```json
    {
        "action":"getAllEvents", 
        "data":[]
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a22676574416c6c4576656e7473222c202264617461223a5b5d7d
  ```

* #### getEventById
  ```js
    description — get event by id.
    param data — [string] — event id
  ```
  data sample
  ```json
    {
        "action":"getEventById", 
        "data":["c8b4b1b8-bf99-4b49-902d-5f25e8e54b5f"]
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a226765744576656e7442794964222c202264617461223a5b2263386234623162382d626639392d346234392d393032642d356632356538653534623566225d7d
  ```

* #### createTicket
  ```js
    description — create a ticket.
    param data — {event: string, owner: address ("0x...")}
  ```
  data sample
  ```json
    {
        "action":"createTicket", 
        "data":{
            "event":"c8b4b1b8-bf99-4b49-902d-5f25e8e54b5f",
            "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        }
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a226372656174655469636b6574222c202264617461223a7b226576656e74223a2263386234623162382d626639392d346234392d393032642d356632356538653534623566222c226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636227d7d
  ```

* #### getTicketById
  ```js
    description — get ticket by id.
    param data — [string] — ticket id
  ```
  data sample
  ```json
    {
        "action":"getTicketById", 
        "data":["c8b4b1b8-bf99-4b49-902d-5f25e8e54b5f"]
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a226765745469636b657442794964222c202264617461223a5b2263386234623162382d626639392d346234392d393032642d356632356538653534623566225d7d
  ```

* #### verifyTicket
  ```js
    description — verify ticket.
    param data — [string] — ticket id
  ```
  data sample
  ```json
    {
        "action":"verifyTicket", 
        "data":["c8b4b1b8-bf99-4b49-902d-5f25e8e54b5f"]
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a227665726966795469636b6574222c202264617461223a5b2263386234623162382d626639392d346234392d393032642d356632356538653534623566225d7d
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Authors

* **Victor Ifeanyi Chukwujiobi** - *Initial work*

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [Cartesi Documentation](https://docs.cartesi.io)
* [OpenAI](https://openai.com)
* [Node.js](https://nodejs.org/en/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>