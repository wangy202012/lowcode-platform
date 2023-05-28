
-- 三个角色(首字母大写)，五个用户,账号密码一致
-- Manager:robin
-- Developer:user1,user2,user3
-- Guest:guest

INSERT INTO `users` VALUES
('guest','$2a$10$o6hK1XiXyxM7c3xRXVw3lOJEjMA4lctF9k24EQWDGGDWZad8hVFuy',1),
('robin','$2a$10$lpeNZLlhlZciRmy7jd9ePug8VMHzWmW4jH28PV/O7RREuPCYJBYTy',1),
('user1','$2a$10$Kg1PW/08s8jMhdc0mHH8qO5d.RcPPaqMLNv/6eaCmyTEBeliwbzdi',1),
('user2','$2a$10$DFcriHJlAuvuK4w.dK6udukpr1tALF33.q8hm74n.3pm/iLdmsEji',1),
('user3','$2a$10$94OXHVX/cRbJ4zY1AlmIYeKQrT6JW48ct3iIT7U/ZluWR3j1/TRlS',1),

('admin','$2a$10$1BaTekx1rA.efQz5gTBCueMpcFtEMnNp0XM1E0iZLmZiRjliKVTSy',1),
('demo','$2a$10$fxO3xToK0VLhNSXEHSd4BucGIUvub5K81sfeE80hdm9KNFnqfXFLW',1),
('luobin','$2a$10$QxAxAgzkP/YRxoukg4XEQOYwiIJ24JVRr2QJzLOOrOvHEzPiiXDb.',1),
('liangzhongheng','$2a$10$.dMV2VMqERqYem1s3LrY/e3dCRQ6WvT5ycAMJy1r5WzUNcWz1e.Ym',1);

INSERT INTO `authorities` VALUES
('guest','ROLE_Guest'),
('robin','ROLE_Manager'),
('user1','ROLE_Developer'),
('user2','ROLE_Developer'),
('user3','ROLE_Developer'),

('admin','ROLE_Manager'),
('demo','ROLE_Manager'),
('luobin','ROLE_Manager'),
('liangzhongheng','ROLE_Manager');