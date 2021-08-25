# Silacak

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

[![codecov](https://codecov.io/gh/kawalcovid19/silacak/branch/main/graph/badge.svg?token=6zs2LFCMFG)](https://codecov.io/gh/kawalcovid19/silacak)

This is a revamp attempt of Silacak app, built using [Next.js](https://nextjs.org/).

## Requirement Specifications

### UI/UX Design

- [Figma file](https://www.figma.com/file/a4l6zqfnLyjG9h9Qyj6QsE/Silacak)

## Purpose, Principles, and Guidelines

The project's purpose, principles, and guidelines take some cues from the [WargaBantuWarga.com](https://www.wargabantuwarga.com/) project.

<!-- ### Purpose -->

### Principles

> What we're striving for:

#### ✅ Performance

Our website must be high-performant because our audience is spread across Indonesia with varying types of devices and network speed. A good measurement of it is Google's [Core Web Vitals](https://web.dev/vitals/).

#### ✅ Accessibility

Our website must be accessible so that we can reach more users and help more people.

#### ✅ Up-to-date Information

Any information posted on our website must be up-to-date to the latest version that our content editors published. We can tolerate delays to a certain degree for the sake of web performance, but it should be limited to less than an hour.

> What we're going against:

#### ❌ Counter-productive Cosmetics

We can't afford to hurt web performance or to provide outdated information just for the sake of the beauty of the website.

#### ❌ Expensive Functionalities

We must carefully consider any additional client-side libraries that we include on the website. Unless its benefits outweigh the trade-off that we have to pay, we should avoid adding the functionality. Even if it is proven to be beneficial, we should strive to implement it in the best possible way. An excellent example of it is [Google Analytics](https://github.com/kawalcovid19/wargabantuwarga.com/issues/18).

#### ❌ Unmeasured Improvements

For any improvements on the website, we should continuously measure its impact on the [Core Web Vitals](https://web.dev/vitals/). If proven to hurt the metrics, we should revert the changes and find another way to implement them without degrading the performance.

### Guidelines

In general, these are three guidelines that we need to pay attention to:

1. [Query priorities](https://testing-library.com/docs/queries/about#priority)
2. [Testing appearance and disappearance](https://testing-library.com/docs/guide-disappearance/)
3. [Opting in for interactions instead of events](https://testing-library.com/docs/guide-events/#interactions-vs-events)

Please ensure that all queries and assertions in your test files comply with those testing guidelines.

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/kawalcovid19/silacak.git
```

Then, install dependencies and fetch data to your local machine:

```bash
cd silacak
yarn install
```

Finally, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Frequently Used Tools

- [Measure Web Performance](https://web.dev/measure)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/)

## Contributing

See our contribution guidelines in these languages:

- [English](CONTRIBUTING.md)
- [Indonesian](CONTRIBUTING_ID.md)

When contributing to our project, please use English when communicating with other people in issues and/or pull requests. [Click here](CONTRIBUTING.md#why-are-we-using-english-in-our-issues--prs) to read why. ([Bahasa Indonesia](CONTRIBUTING_ID.md#mengapa-kita-menggunakan-bahasa-inggris-dalam-menulis-issue-dan-pull-request))

## API

Our API documentation is in [api-reference.md](docs/api-reference.md) file.

## Contributors ✨

Thanks go to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://resir014.xyz"><img src="https://avatars.githubusercontent.com/u/5663877?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Resi Respati</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=resir014" title="Code">💻</a> <a href="#design-resir014" title="Design">🎨</a> <a href="#infra-resir014" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-resir014" title="Maintenance">🚧</a> <a href="#projectManagement-resir014" title="Project Management">📆</a> <a href="https://github.com/kawalcovid19/silacak/pulls?q=is%3Apr+reviewed-by%3Aresir014" title="Reviewed Pull Requests">👀</a> <a href="#security-resir014" title="Security">🛡️</a> <a href="#tool-resir014" title="Tools">🔧</a> <a href="https://github.com/kawalcovid19/silacak/commits?author=resir014" title="Documentation">📖</a> <a href="https://github.com/kawalcovid19/silacak/commits?author=resir014" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://zainf.dev"><img src="https://avatars.githubusercontent.com/u/6315466?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zain Fathoni</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=zainfathoni" title="Code">💻</a> <a href="https://github.com/kawalcovid19/silacak/commits?author=zainfathoni" title="Documentation">📖</a> <a href="#ideas-zainfathoni" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-zainfathoni" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-zainfathoni" title="Maintenance">🚧</a> <a href="#mentoring-zainfathoni" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-zainfathoni" title="Project Management">📆</a> <a href="https://github.com/kawalcovid19/silacak/pulls?q=is%3Apr+reviewed-by%3Azainfathoni" title="Reviewed Pull Requests">👀</a> <a href="#tool-zainfathoni" title="Tools">🔧</a> <a href="https://github.com/kawalcovid19/silacak/commits?author=zainfathoni" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://taxfix.de"><img src="https://avatars.githubusercontent.com/u/6219895?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aditya Purwa</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=adityapurwa" title="Code">💻</a></td>
    <td align="center"><a href="http://alvatih.com"><img src="https://avatars.githubusercontent.com/u/22621375?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Muhammad Al Faris</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=dreamid27" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/asaadam"><img src="https://avatars.githubusercontent.com/u/1397612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Akbar</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=asaadam" title="Documentation">📖</a> <a href="#security-asaadam" title="Security">🛡️</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/ramarahmanda"><img src="https://avatars.githubusercontent.com/u/12446260?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ramarahmanda</b></sub></a><br /><a href="#projectManagement-ramarahmanda" title="Project Management">📆</a> <a href="#ideas-ramarahmanda" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/auliazahrina"><img src="https://avatars.githubusercontent.com/u/44616024?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aulia Zahrina Qashri</b></sub></a><br /><a href="#projectManagement-auliazahrina" title="Project Management">📆</a> <a href="https://github.com/kawalcovid19/silacak/commits?author=auliazahrina" title="Documentation">📖</a> <a href="#ideas-auliazahrina" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/dekwahdimas"><img src="https://avatars.githubusercontent.com/u/56619123?v=4?s=100" width="100px;" alt=""/><br /><sub><b>IGN Bagus Dimas W.</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=dekwahdimas" title="Code">💻</a></td>
    <td align="center"><a href="http://adibfirman.github.io"><img src="https://avatars.githubusercontent.com/u/24794196?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adib Firman</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=adibfirman" title="Code">💻</a></td>
    <td align="center"><a href="http://mukhlis.id"><img src="https://avatars.githubusercontent.com/u/27577560?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mukhlis</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=mukhlisakbr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/hanihusam/"><img src="https://avatars.githubusercontent.com/u/25399426?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hani Husamuddin</b></sub></a><br /><a href="https://github.com/kawalcovid19/silacak/commits?author=hanihusam" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
