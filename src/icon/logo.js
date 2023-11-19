import React from 'react';

const Logo = ({ className }) => {
  return (
    <svg
      viewBox="0 0 178 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M42.2885 16.2619C41.5328 14.48 40.5328 12.8195 39.3188 11.3312C37.5243 9.06551 35.2849 7.21737 32.7479 5.90847C30.2109 4.59959 27.4338 3.85961 24.5995 3.73725C21.7652 3.61489 18.9379 4.11291 16.3036 5.19857C13.6695 6.28421 11.2881 7.93286 9.31622 10.036C7.34437 12.1391 5.82678 14.6491 4.86334 17.4007C3.8999 20.1522 3.51242 23.083 3.72645 26C3.94049 28.9172 4.75114 31.7544 6.10509 34.3251C7.45903 36.8959 9.32556 39.1418 11.5818 40.915C13.0295 42.0755 14.6292 43.0189 16.3333 43.7172C18.7224 44.7269 21.2795 45.2469 23.8615 45.2484C29.1912 45.2363 34.2988 43.0454 38.0648 39.156C41.8307 35.2667 43.9476 29.9963 43.9515 24.5C43.9554 21.6649 43.3892 18.8598 42.2885 16.2619ZM23.8467 7.94716C26.1654 7.94692 28.4561 8.46953 30.5582 9.47841C30.0456 9.70683 29.5066 9.86637 28.9545 9.95311C27.138 10.2243 25.4552 11.094 24.1573 12.4325C22.8594 13.7709 22.016 15.5063 21.753 17.3797C21.6376 18.4303 21.1742 19.4077 20.4412 20.1469C19.7081 20.8862 18.7502 21.3419 17.7291 21.4375C15.9125 21.7087 14.2297 22.5784 12.9318 23.9169C11.6339 25.2554 10.7905 26.9907 10.5276 28.8641C10.4385 29.863 10.0252 30.8018 9.35455 31.5284C8.19733 29.0069 7.67748 26.2243 7.84337 23.4399C8.00926 20.6555 8.85549 17.9596 10.3033 15.603C11.7511 13.2465 13.7535 11.306 16.1241 9.96205C18.4947 8.61812 21.1564 7.91447 23.8615 7.91654L23.8467 7.94716ZM11.567 35.2187C11.7452 35.0503 11.9233 34.8972 12.1015 34.7134C13.4225 33.3927 14.2704 31.6492 14.507 29.7675C14.6029 28.7097 15.0608 27.7217 15.7988 26.9806C16.509 26.2184 17.4648 25.7499 18.4864 25.6637C20.3029 25.3926 21.9857 24.5228 23.2836 23.1843C24.5815 21.8459 25.4249 20.1105 25.6879 18.2372C25.7522 17.1308 26.2125 16.0885 26.9797 15.3125C27.7074 14.565 28.6723 14.1137 29.697 14.0415C31.3658 13.8048 32.9222 13.0397 34.1515 11.8519C35.5513 13.0494 36.7371 14.49 37.6557 16.1087C37.5993 16.1873 37.5346 16.2593 37.4627 16.3231C36.754 17.0921 35.7994 17.5708 34.7751 17.6706C32.9566 17.937 31.2713 18.8053 29.9725 20.1445C28.6739 21.4839 27.832 23.2219 27.5736 25.0972C27.4689 26.1513 27.0141 27.1357 26.2863 27.8836C25.5582 28.6316 24.602 29.097 23.5794 29.2009C21.7575 29.47 20.0685 30.338 18.763 31.6759C17.4576 33.0139 16.6055 34.7503 16.3333 36.6275C16.2534 37.3758 16.0041 38.0944 15.6057 38.7253C14.0823 37.7925 12.7179 36.6079 11.567 35.2187ZM23.8467 41.1294C22.34 41.1311 20.8404 40.9145 19.3921 40.4862C19.8876 39.5338 20.2097 38.4958 20.3424 37.4237C20.4465 36.3719 20.8992 35.3893 21.6241 34.6418C22.349 33.8942 23.3019 33.4273 24.3218 33.32C26.141 33.0519 27.8272 32.1835 29.1281 30.8447C30.4288 29.5061 31.2745 27.7689 31.5382 25.8934C31.6423 24.8416 32.095 23.859 32.8199 23.1115C33.5448 22.3639 34.4976 21.897 35.5176 21.7897C36.8866 21.6061 38.1915 21.0804 39.3188 20.2584C39.9448 22.7052 40.0189 25.2673 39.5356 27.7482C39.0522 30.2292 38.0241 32.5631 36.5304 34.5707C35.0366 36.5782 33.1169 38.2064 30.9181 39.33C28.7195 40.4536 26.3005 41.043 23.8467 41.0528V41.1294Z"
        fill="#60D59D"
      />
      <path
        d="M59.1895 17.7227H63.4375C65.2799 17.7227 66.6699 17.9896 67.6074 18.5234C68.5449 19.0573 69.0137 19.9785 69.0137 21.2871C69.0137 21.834 68.916 22.3288 68.7207 22.7715C68.5319 23.2077 68.2552 23.569 67.8906 23.8555C67.526 24.1354 67.0768 24.3242 66.543 24.4219V24.5195C67.0964 24.6172 67.5879 24.7897 68.0176 25.0371C68.4538 25.2845 68.7956 25.6393 69.043 26.1016C69.2969 26.5638 69.4238 27.1628 69.4238 27.8984C69.4238 28.7708 69.2155 29.513 68.7988 30.125C68.3887 30.737 67.7995 31.2025 67.0312 31.5215C66.2695 31.8405 65.3646 32 64.3164 32H59.1895V17.7227ZM61.5332 23.6113H63.7793C64.8405 23.6113 65.5762 23.4388 65.9863 23.0938C66.3965 22.7487 66.6016 22.2441 66.6016 21.5801C66.6016 20.903 66.3574 20.4147 65.8691 20.1152C65.3874 19.8158 64.6191 19.666 63.5645 19.666H61.5332V23.6113ZM61.5332 25.5059V30.0371H64.0039C65.0977 30.0371 65.8659 29.8255 66.3086 29.4023C66.7513 28.9792 66.9727 28.4062 66.9727 27.6836C66.9727 27.2409 66.8717 26.8568 66.6699 26.5312C66.4746 26.2057 66.1523 25.9551 65.7031 25.7793C65.2539 25.597 64.6484 25.5059 63.8867 25.5059H61.5332ZM81.5625 21.1895V32H79.7559L79.4434 30.5449H79.3164C79.0885 30.916 78.7988 31.2253 78.4473 31.4727C78.0957 31.7135 77.7051 31.8926 77.2754 32.0098C76.8457 32.1335 76.3932 32.1953 75.918 32.1953C75.1042 32.1953 74.4076 32.0586 73.8281 31.7852C73.2552 31.5052 72.8158 31.0755 72.5098 30.4961C72.2038 29.9167 72.0508 29.168 72.0508 28.25V21.1895H74.3555V27.8203C74.3555 28.6602 74.5247 29.2884 74.8633 29.7051C75.2083 30.1217 75.7422 30.3301 76.4648 30.3301C77.1615 30.3301 77.7148 30.1868 78.125 29.9004C78.5352 29.6139 78.8249 29.1908 78.9941 28.6309C79.1699 28.071 79.2578 27.3841 79.2578 26.5703V21.1895H81.5625ZM87.1484 16.8047V20.4668C87.1484 20.89 87.1354 21.3066 87.1094 21.7168C87.0898 22.1204 87.0703 22.4362 87.0508 22.6641H87.1484C87.4414 22.1953 87.8483 21.8014 88.3691 21.4824C88.8965 21.1569 89.5703 20.9941 90.3906 20.9941C91.6732 20.9941 92.7051 21.4661 93.4863 22.4102C94.2676 23.3477 94.6582 24.7376 94.6582 26.5801C94.6582 27.804 94.4792 28.8327 94.1211 29.666C93.763 30.4993 93.2585 31.1309 92.6074 31.5605C91.9629 31.9837 91.2044 32.1953 90.332 32.1953C89.5117 32.1953 88.8477 32.0456 88.3398 31.7461C87.8385 31.4401 87.4447 31.0853 87.1582 30.6816H86.9922L86.5723 32H84.8535V16.8047H87.1484ZM89.7852 22.8594C89.1341 22.8594 88.6165 22.9896 88.2324 23.25C87.8548 23.5104 87.5814 23.901 87.4121 24.4219C87.2428 24.9362 87.1549 25.5905 87.1484 26.3848V26.5898C87.1484 27.7943 87.3372 28.7155 87.7148 29.3535C88.099 29.9915 88.7956 30.3105 89.8047 30.3105C90.6055 30.3105 91.2207 29.9883 91.6504 29.3438C92.0801 28.6927 92.2949 27.7617 92.2949 26.5508C92.2949 25.3268 92.0801 24.4056 91.6504 23.7871C91.2272 23.1686 90.6055 22.8594 89.7852 22.8594ZM99.6094 16.8047V20.4668C99.6094 20.89 99.5964 21.3066 99.5703 21.7168C99.5508 22.1204 99.5312 22.4362 99.5117 22.6641H99.6094C99.9023 22.1953 100.309 21.8014 100.83 21.4824C101.357 21.1569 102.031 20.9941 102.852 20.9941C104.134 20.9941 105.166 21.4661 105.947 22.4102C106.729 23.3477 107.119 24.7376 107.119 26.5801C107.119 27.804 106.94 28.8327 106.582 29.666C106.224 30.4993 105.719 31.1309 105.068 31.5605C104.424 31.9837 103.665 32.1953 102.793 32.1953C101.973 32.1953 101.309 32.0456 100.801 31.7461C100.299 31.4401 99.9056 31.0853 99.6191 30.6816H99.4531L99.0332 32H97.3145V16.8047H99.6094ZM102.246 22.8594C101.595 22.8594 101.077 22.9896 100.693 23.25C100.316 23.5104 100.042 23.901 99.873 24.4219C99.7038 24.9362 99.6159 25.5905 99.6094 26.3848V26.5898C99.6094 27.7943 99.7982 28.7155 100.176 29.3535C100.56 29.9915 101.257 30.3105 102.266 30.3105C103.066 30.3105 103.682 29.9883 104.111 29.3438C104.541 28.6927 104.756 27.7617 104.756 26.5508C104.756 25.3268 104.541 24.4056 104.111 23.7871C103.688 23.1686 103.066 22.8594 102.246 22.8594ZM112.08 32H109.775V16.8047H112.08V32ZM119.668 20.9844C120.632 20.9844 121.458 21.1829 122.148 21.5801C122.839 21.9772 123.369 22.5404 123.74 23.2695C124.111 23.9987 124.297 24.8711 124.297 25.8867V27.1172H117.08C117.106 28.1654 117.386 28.9727 117.92 29.5391C118.46 30.1055 119.215 30.3887 120.186 30.3887C120.876 30.3887 121.494 30.3236 122.041 30.1934C122.594 30.0566 123.164 29.8581 123.75 29.5977V31.4629C123.21 31.7168 122.66 31.9023 122.1 32.0195C121.54 32.1367 120.869 32.1953 120.088 32.1953C119.027 32.1953 118.092 31.9902 117.285 31.5801C116.484 31.1634 115.856 30.5449 115.4 29.7246C114.951 28.9043 114.727 27.8854 114.727 26.668C114.727 25.457 114.932 24.4284 115.342 23.582C115.752 22.7357 116.328 22.0911 117.07 21.6484C117.812 21.2057 118.678 20.9844 119.668 20.9844ZM119.668 22.7129C118.945 22.7129 118.359 22.9473 117.91 23.416C117.467 23.8848 117.207 24.5716 117.129 25.4766H122.051C122.044 24.9362 121.953 24.4577 121.777 24.041C121.608 23.6243 121.348 23.2988 120.996 23.0645C120.651 22.8301 120.208 22.7129 119.668 22.7129ZM132.314 17.7227H136.562C138.405 17.7227 139.795 17.9896 140.732 18.5234C141.67 19.0573 142.139 19.9785 142.139 21.2871C142.139 21.834 142.041 22.3288 141.846 22.7715C141.657 23.2077 141.38 23.569 141.016 23.8555C140.651 24.1354 140.202 24.3242 139.668 24.4219V24.5195C140.221 24.6172 140.713 24.7897 141.143 25.0371C141.579 25.2845 141.921 25.6393 142.168 26.1016C142.422 26.5638 142.549 27.1628 142.549 27.8984C142.549 28.7708 142.34 29.513 141.924 30.125C141.514 30.737 140.924 31.2025 140.156 31.5215C139.395 31.8405 138.49 32 137.441 32H132.314V17.7227ZM134.658 23.6113H136.904C137.965 23.6113 138.701 23.4388 139.111 23.0938C139.521 22.7487 139.727 22.2441 139.727 21.5801C139.727 20.903 139.482 20.4147 138.994 20.1152C138.512 19.8158 137.744 19.666 136.689 19.666H134.658V23.6113ZM134.658 25.5059V30.0371H137.129C138.223 30.0371 138.991 29.8255 139.434 29.4023C139.876 28.9792 140.098 28.4062 140.098 27.6836C140.098 27.2409 139.997 26.8568 139.795 26.5312C139.6 26.2057 139.277 25.9551 138.828 25.7793C138.379 25.597 137.773 25.5059 137.012 25.5059H134.658ZM149.502 20.9844C150.869 20.9844 151.901 21.2871 152.598 21.8926C153.301 22.498 153.652 23.4421 153.652 24.7246V32H152.021L151.582 30.4668H151.504C151.198 30.8574 150.882 31.1797 150.557 31.4336C150.231 31.6875 149.854 31.8763 149.424 32C149.001 32.1302 148.483 32.1953 147.871 32.1953C147.227 32.1953 146.65 32.0781 146.143 31.8438C145.635 31.6029 145.234 31.2383 144.941 30.75C144.648 30.2617 144.502 29.6432 144.502 28.8945C144.502 27.7812 144.915 26.9447 145.742 26.3848C146.576 25.8249 147.832 25.5156 149.512 25.457L151.387 25.3887V24.8223C151.387 24.0736 151.211 23.5397 150.859 23.2207C150.514 22.9017 150.026 22.7422 149.395 22.7422C148.854 22.7422 148.33 22.8203 147.822 22.9766C147.314 23.1328 146.82 23.3249 146.338 23.5527L145.596 21.9316C146.123 21.6517 146.722 21.4238 147.393 21.248C148.07 21.0723 148.773 20.9844 149.502 20.9844ZM151.377 26.834L149.98 26.8828C148.835 26.9219 148.031 27.1172 147.568 27.4688C147.106 27.8203 146.875 28.3021 146.875 28.9141C146.875 29.4479 147.035 29.8385 147.354 30.0859C147.673 30.3268 148.092 30.4473 148.613 30.4473C149.408 30.4473 150.065 30.2227 150.586 29.7734C151.113 29.3177 151.377 28.6504 151.377 27.7715V26.834ZM164.131 28.9141C164.131 29.6237 163.958 30.2227 163.613 30.7109C163.268 31.1992 162.764 31.5703 162.1 31.8242C161.442 32.0716 160.635 32.1953 159.678 32.1953C158.923 32.1953 158.271 32.14 157.725 32.0293C157.184 31.9251 156.673 31.7624 156.191 31.541V29.5586C156.706 29.7995 157.282 30.0078 157.92 30.1836C158.564 30.3594 159.173 30.4473 159.746 30.4473C160.501 30.4473 161.045 30.3301 161.377 30.0957C161.709 29.8548 161.875 29.5358 161.875 29.1387C161.875 28.9043 161.807 28.696 161.67 28.5137C161.54 28.3249 161.292 28.1328 160.928 27.9375C160.57 27.7357 160.042 27.4948 159.346 27.2148C158.662 26.9414 158.086 26.668 157.617 26.3945C157.148 26.1211 156.794 25.7923 156.553 25.4082C156.312 25.0176 156.191 24.5195 156.191 23.9141C156.191 22.957 156.569 22.2311 157.324 21.7363C158.086 21.235 159.092 20.9844 160.342 20.9844C161.006 20.9844 161.631 21.0527 162.217 21.1895C162.809 21.3197 163.389 21.5117 163.955 21.7656L163.232 23.4941C162.744 23.2793 162.253 23.1035 161.758 22.9668C161.27 22.8236 160.771 22.752 160.264 22.752C159.671 22.752 159.219 22.8431 158.906 23.0254C158.6 23.2077 158.447 23.4681 158.447 23.8066C158.447 24.0605 158.522 24.2754 158.672 24.4512C158.822 24.627 159.079 24.8027 159.443 24.9785C159.814 25.1543 160.329 25.3724 160.986 25.6328C161.631 25.8802 162.188 26.1406 162.656 26.4141C163.132 26.681 163.496 27.0098 163.75 27.4004C164.004 27.791 164.131 28.2956 164.131 28.9141ZM168.906 16.8047V20.623C168.906 21.0202 168.893 21.4076 168.867 21.7852C168.848 22.1628 168.825 22.4557 168.799 22.6641H168.926C169.154 22.2865 169.434 21.9772 169.766 21.7363C170.098 21.4889 170.469 21.3034 170.879 21.1797C171.296 21.056 171.738 20.9941 172.207 20.9941C173.034 20.9941 173.737 21.1341 174.316 21.4141C174.896 21.6875 175.339 22.1139 175.645 22.6934C175.957 23.2728 176.113 24.0247 176.113 24.9492V32H173.818V25.3789C173.818 24.5391 173.646 23.9108 173.301 23.4941C172.956 23.071 172.422 22.8594 171.699 22.8594C171.003 22.8594 170.449 23.0059 170.039 23.2988C169.635 23.5853 169.346 24.0117 169.17 24.5781C168.994 25.138 168.906 25.8216 168.906 26.6289V32H166.611V16.8047H168.906Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
