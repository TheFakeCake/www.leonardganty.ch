function Logo({ className }) {
  return (
    <div className={('rounded-full ring-2 ring-current ' + className).trim()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M111.09 32.604l-.824.076c-30.999 2.838-61.58 2.809-92.02.014l-.35-.033-4.422 4.387 1.615.146c29.778 2.719 59.983 2.869 91.488.088v1.18 3.578h-2.369v7.693l4.512-4.523v-4.061l2.369-2.375zM20.158 55.092l-4.512 4.512H33.74v-4.512zm18.934-5.703v10.215h19.031v-4.512h-14.52v-5.703zm24.383 0v10.215h18.74v-4.512H67.986v-5.703zm24.091.047V59.65h15.844v1.146 4.836l4.512-4.523v-5.971H92.078v-5.703zM39.092 65.637v49.26l4.361-4.299V65.637zm48.474 0v49.26l4.359-4.299V65.637z"
        />
      </svg>
    </div>
  );
}

export default Logo;
