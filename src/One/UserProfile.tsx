export const UserProfile = () => {
  return (
    <div className="flex w-[36rem] flex-col gap-x-4 rounded-lg bg-white p-12 lg:flex-row">
      <img
        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/448754182_956574059554630_7494155741246937501_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF8lU33wT2ZXL9nJbvHZpM6KASwWoUYgBYoBLBahRiAFt3ZDEHQS63A8oBcvi30hQJCC8ex01LVx_QCOliB0vXy&_nc_ohc=PBwcoSsBWPYQ7kNvgE2E2d2&_nc_oc=Adic0WHIqOSKLqwXrh5OkOpKaZ-46hwqzILliRnht32hP3Qc-JYuLNSRP8jSBbL0JQY&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AdohDHQIjthW1-7pIxYa8fU&oh=00_AYBI2C8QKceO87b7PllnZRZUxN2yDIDBuqxLWFvWLHwE7w&oe=678D51B1"
        className="w-32 self-start rounded-full"
        alt=""
      />
      <div className="space-y-7 text-rose-600">
        <div>
          <h1 className="font-kochad text-3xl font-bold">Huỳnh Thanh Nam</h1>
          <h2 className="font-popi mt-1">
            Sinh viên khoa Tâm lý học - HCMUSSH
          </h2>
        </div>

        <div className="space-y-4">
          <p className="font-roboto flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 inline-block h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            Thủ thư at Thư viện khoa Tâm lý học USSH HCM
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-roboto flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 inline-block h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            Former Phó chủ nhiệm F6 at Psychology Human of HCM USSH
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-roboto flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 inline-block h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Former Chiến sĩ đầu đời at ONG NĂNG ĐỘNG - Mùa Hè Xanh
          </p>
        </div>

        <p className="text-lg">PhOH và SSS. Anh này hay comment các kiểu nè.</p>

        <button
          className="rounded-md border-2 border-red-200 p-2"
          onClick={() =>
            (window.location.href =
              "https://www.facebook.com/nam.huynhthanh.92317")
          }
        >
          Facebook
        </button>
      </div>
    </div>
  );
};
