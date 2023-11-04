# IITVERSE-API-HACKATHAON
# Team Vanguard Backend Documentation

## Table of Contents
- [Introduction](#introduction)
- [Endpoints](#endpoints)
    - [countrylist](#countrylist)
    - [getcoordinate](#getcoordinate)
    - [sortcity](#sortcity)
    - [sortcityDsc](#sortcityDsc)
    - [sortpopulation_socialdata](#sortpopulation_socialdata)
    - [sortGdp_socialdata](#sortGdp_socialdata)
    - [getfulldata](#getfulldata)

## Introduction
This backend documentation provides information about the available endpoints and their functionalities in the Team Vanguard project. The project offers a range of functionalities related to country data, city data, and socio-economic information.

## Endpoints

### countrylist
- **Description:** Returns a list of all available countries (in alphabetical order) and their included cities.
- **Endpoint:** `/countrylist`
- **HTTP Method:** GET

### getcoordinate
- **Description:** Returns the geographical coordinates of any given city or location.
- **Endpoint:** `/getcoordinate`
- **HTTP Method:** GET

### sortcity
- **Description:** Returns a list of available cities sorted with respect to their Air Quality Index (AQI).
- **Endpoint:** `/sortcity`
- **HTTP Method:** GET

### sortcityDsc
- **Description:** Returns a list of available cities sorted with respect to their AQI in descending order.
- **Endpoint:** `/sortcityDsc`
- **HTTP Method:** GET

### sortpopulation_socialdata
- **Description:** Returns a list of countries along with their socio-economic data sorted with respect to population.
- **Endpoint:** `/sortpopulation_socialdata`
- **HTTP Method:** GET

### sortGdp_socialdata
- **Description:** Returns a list of countries along with their socio-economic data sorted with respect to GDP.
- **Endpoint:** `/sortGdp_socialdata`
- **HTTP Method:** GET

### getfulldata
- **Description:** Returns a list of all available cities in every available country along with Air Quality and socio-economic information.
- **Endpoint:** `/getfulldata`
- **HTTP Method:** GET

Please refer to the respective endpoint documentation for more details on request parameters, responses, and usage examples.

Feel free to contribute to this project or provide feedback. If you encounter any issues or have questions, please [open an issue](https://github.com/yourrepository/issues).

## License
This project is licensed under the [MIT License](LICENSE).
