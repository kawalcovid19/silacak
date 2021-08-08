# Berkontribusi ke Silacak

## Cara berkontribusi

Dalam proyek ini, kita memaksimalkan penggunaan fitur-fitur GitHub untuk mendokumentasikan dan memberikan sinyal terhadap kemajuan apapun dalam pengerjaan website ini.

### Menemukan atau membuat _issues_

Sebagian besar kontribusi berawal dari membuat _Issues_. Tiap orang dapat memulai membuat _Issues_ untuk diskusi. Anda dapat mengunjungi [pranala ini](https://guides.github.com/features/issues/) untuk pemahaman lebih lanjut mengenai _Issues_. Secara spesifik, Anda dapat menemukan _Issues_ [di tab **Issues** ini](https://github.com/kawalcovid19/silacak/issues). Hanya ada dua kategori bagian pada _Issues_, yakni _Open_ dan _Closed Issues_.

#### _Open Issues_

_Open Issues_ merupakan kategori yang membutuhkan perhatian lebih serta penyelesaian. Kontributor disarankan menelusuri bagian _Open Issues_ dan mulai mengerjakannya.

#### _Closed Issues_

_Closed Issues_ merupakan kategori _issue_ yang sudah selesai dikerjakan atau tidak membutuhkan aksi lanjutan. _Issue_ dengan status _closed_ dapat kembali diubah menjadi _open_ ketika kontibutor menemukan _issue_ yang berhubungan di masa mendatang.

Mohon perhatikan tiap atribut _issue_. Tiap _issue_ kemungkinan dikerjakan oleh kontributor lain melalui [_Linked Pull Requests_](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue). Ini berarti _issue_ sedang dalam penanganan. Untuk menghindari pekerjaan yang sama, kontributor sangat dianjurkan untuk mengajukan sebuah [_draft pull request_](https://github.blog/2019-02-14-introducing-draft-pull-requests/) terlebih dahulu setiap kali hendak mengerjakan suatu _issue_.

#### Untuk Pemula: label _`good first issue`_

Seperti yang tertulis [di sini](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/), _`good first issue`_ merupakan sebuah fitur label dari GitHub yang diciptakan untuk membantu para kontributor pemula dalam berkontribusi ke sebuah proyek _open-source_. _`good first issue`_ memberitakan kita mengenai tingkat kesulitan dari sebuah _issue_. Ini berarti, bahwa sebuah _issue_ dengan label _`good first issue`_ cocok sekali bagi kontributor pemula yang ingin melakukan kontribusi pertama mereka ke sebuah proyek _open-source_.

Bagaimana cara mencari _issue_ dengan label _`good first issue`_:

1. Cara paling mudah adalah dengan mengunjungi pranala `github.com/<owner>/<repository>/contribute`. Dalam hal ini, Anda dapat mengunjungi [pranala ini](https://github.com/kawalcovid19/silacak/contribute). Pranala tersebut akan memberikan daftar dari semua _issue_ dengan label _`good first issue`_.
2. Atau cara lainnya adalah dengan mengunjungi bagian [_Issues_](https://github.com/kawalcovid19/silacak/issues) dari sebuah repository, lalu klik bagian _Labels_ di sebelah _Milestones_. Di sana, Anda dapat melihat banyak label untuk _issues_ yang terdapat dalam repository tersebut. Lalu cari dan klik label `good first issue`.

### Panduan mulai bekerja

Sebelum mengerjakan sebuah _issue_, ada hal yang harus diperhatikan:

1. Apakah ada kontributor lain yang sedang mengerjakannya? Anda dapat mencari apakah ada _pull request_ terkait sebelum memutuskan untuk mulai mengerjakan _issue_ tersebut.
2. Untuk mulai mengerjakannya, pastikan **_create branch_** dari `main`, lalu segera _commit_ dan _push_ perubahannya **sesegera mungkin** sekecil apapun itu.
3. Kemudian **buat _pull request_** baru dengan [menjadikannya sebagai **_draft pull request_**](https://github.blog/2019-02-14-introducing-draft-pull-requests/) untuk memberikan sinyal kepada kontributor lainnya bahwa [_pull request_ ini masih sedang dalam pengerjaan](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request). Dengan demikian, orang lain yang ingin mengerjakan _issue_ yang sama akan berpikir dua kali sebelum ikut mengerjakannya.

### Memanfaatkan _Draft Pull Requests_ untuk Berkomunikasi

_Draft Pull Requests_ merupakan sebuah fitur yang disediakan oleh GitHub, yang bertujuan sebagai alat berkomunikasi bagi para kontributor. Ketika kita membuat sebuah _Draft Pull Request_, kita tidak bisa menggabungkannya melainkan kita sudah menandainya sebagai _Ready for review_. Ini merupakan pendekatan yang lebih baik untuk menggunakannya sebagai alat berkomunikasi antar kontributor, dan kita juga bisa memberikan informasi bahwa kita sedang mengatasi sebuah isu.

Langkah-langkah untuk membuat _Draft Pull Request_:

1. _Commit_ dan _push_ perubahan terbaru ke _forked repository_ Anda.
2. Pergi ke bagian _Pull requests_ pada _forked repository_ Anda, dan klik _New pull request_.
   ![Petunjuk-1](https://user-images.githubusercontent.com/46013258/126284390-c2bd1aa6-fdc2-4aa6-a945-031f02db038e.png)
3. Pilih _forked repository_ Anda sebagai _head repository_, dan pilih _branch_ tempat Anda membuat perubahan untuk bagian _compare_.
   ![Petunjuk-2](https://user-images.githubusercontent.com/46013258/126285036-27b49325-62a2-4a6c-b216-5bae261788da.png)
4. Berikan sebuah judul dan beberapa deskripsi mengenai _pull request_ Anda, lalu pilih _Create draft pull request_ (seperti pada gambar di bawah) dan klik tombol berwarna hijau.
   ![Petunjuk-3](https://user-images.githubusercontent.com/46013258/126286179-04341e30-1224-49cb-9b9a-3c3aee99c308.png)
5. Jangan lupa untuk menandai _Draft Pull Request_ Anda sebagai _Ready for review_ ketika Anda sudah melakukan semua perubahan yang diinginkan.

## Pertanyaan yang sering ditanyakan

### Mengapa kita menggunakan bahasa Inggris dalam menulis _issue_ dan _pull request_?

Ada beberapa alasan mengapa kita menggunakan bahasa Inggris ketika berkomunikasi di dalam _issue_ dan _pull request_:

1. Secara alamiah, lebih mudah untuk _software engineer_ berkomunikasi dalam bahasa Inggris, karena terminologi-terminologi teknis yang digunakan dalam pemrograman pun berbahasa Inggris. Menerjemahkannya ke Bahasa Indonesia memunculkan resiko miskomunikasi, sementara menggunakan Bahasa Inggris membutuhkan banyak penyesuaian penulisan dalam bentuk _italic_ mengacu pada [PUEBI](https://puebi.js.org/huruf/miring).
2. Membiasakan para kontributor yang mayoritas berasal dari Indonesia untuk berkomunikasi dengan bahasa Inggris. Sangat penting untuk mengasah kemampuan menulis dan membaca bahasa Inggris kita karena sebagian besar dari komunitas _open-source_ di seluruh dunia menggunakan bahasa Inggris sebagai bahasa utama mereka.
3. Menggunakan bahasa Inggris membuat proyek ini lebih mudah diakui secara global. Apabila kita ingin mendapatkan dukungan dari komunitas global, mereka lebih mudah memahami tujuan kita, sehingga mereka lebih mudah untuk meluangkan waktu dan keahlian mereka untuk membantu membuat proyek ini lebih baik. Contohnya menyediakan _free credits_ untuk layanan mereka, mengadvokasikan proyek ini kepada pemimpin dunia, atau berkontribusi langsung ke proyek kita.
