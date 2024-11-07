import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('439b0a00-74ca-4515-93d6-58ca129e18c8', '1Roxanne_Leannon@hotmail.com', 'Bob Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'def456token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0abbad5b-039b-4a36-a495-cb494738b838', '9Beaulah_Ratke@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'def456token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('bc097b10-3a69-4f4c-8078-e2e2b581d6c5', '17Vivienne92@gmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('1d7b1321-879b-4860-8cda-bf1ac7161e7b', '33Tyler_Hilpert@hotmail.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=35', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('23bf7689-17d5-4234-9269-3d324367b2ea', '41Cordelia_Yundt@yahoo.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=43', 'mno345token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('873c66b8-1981-402a-90ce-ed8e5fef1e7f', '49Christelle.Pfannerstill99@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c35d5c53-9bff-46e9-866d-37e0da809a1a', '57Juliana_Pagac@gmail.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=59', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4', '65Jaydon21@yahoo.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=67', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ca351c98-ebdf-4807-acdd-af516f1916ea', '73Antonietta40@gmail.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('77da1843-da1e-49df-b8bd-36540fca111e', 'Exclusive virtual date ideas', '0abbad5b-039b-4a36-a495-cb494738b838');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('b204376f-830f-47fe-9d09-6ee6d750fa9a', 'Daily motivational quotes and affirmations', '0abbad5b-039b-4a36-a495-cb494738b838');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('406568c3-7634-4da1-b4eb-2761f63c6c59', 'Daily motivational quotes and affirmations', 'ca351c98-ebdf-4807-acdd-af516f1916ea');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('140bcb70-57bf-4feb-a065-eb820625b4e5', 'Monthly AI companion updates and features', '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('85837b4c-1fc1-4d12-88a5-4461918c2926', 'Exclusive virtual date ideas', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('2c49c7fa-b48a-41d6-86c1-a047fe3fa404', 'Exclusive virtual date ideas', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('9f19f1e1-c821-49a8-8e09-95463988f1c3', 'Daily motivational quotes and affirmations', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('a14bdcdf-c5c0-40c8-9e7e-7cf53043e92f', 'Monthly AI companion updates and features', '873c66b8-1981-402a-90ce-ed8e5fef1e7f');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('4f3fc73a-cc24-4500-bce8-ee4a0e5c0561', 'Exclusive virtual date ideas', '1d7b1321-879b-4860-8cda-bf1ac7161e7b');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('79c7718b-a2dc-44bb-8144-8d75e8fb1bfb', 'Personalized conversation starters', '23bf7689-17d5-4234-9269-3d324367b2ea');

INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('463ad85b-5d69-419f-9bd4-4ee6bf43c1b4', 'Kai', 'voice2', 'empathetic', 'movies', 'template4', 49, '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('7c4a4a49-15c7-467f-9ef9-bab5dde50428', 'Max', 'voice3', 'witty', 'sports', 'template5', 929, 'bc097b10-3a69-4f4c-8078-e2e2b581d6c5');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('a580b870-f310-4677-89eb-cceff55137ca', 'Luna', 'voice3', 'thoughtful', 'travel', 'template4', 169, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('187f3380-96fe-4880-b508-4daef3c1096a', 'Kai', 'voice1', 'adventurous', 'sports', 'template5', 71, '0abbad5b-039b-4a36-a495-cb494738b838');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('738146bf-ae00-4e29-97cb-e8cb21838bfa', 'Kai', 'voice1', 'cheerful', 'travel', 'template3', 511, 'bc097b10-3a69-4f4c-8078-e2e2b581d6c5');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('c4fd3ba1-a7ea-4cc7-a783-4eb909ea90de', 'Luna', 'voice5', 'cheerful', 'music', 'template1', 607, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('812f482a-4d8d-47b5-8ce2-20ee647ecfcf', 'Luna', 'voice2', 'cheerful', 'travel', 'template5', 331, '1d7b1321-879b-4860-8cda-bf1ac7161e7b');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('3b1085d1-9091-4e6d-87f1-e8208d7c96d2', 'Kai', 'voice1', 'empathetic', 'travel', 'template1', 913, '439b0a00-74ca-4515-93d6-58ca129e18c8');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('9dbc9135-1496-4a09-a080-47d865357323', 'Ella', 'voice3', 'adventurous', 'cooking', 'template4', 808, '0abbad5b-039b-4a36-a495-cb494738b838');
INSERT INTO "Companion" ("id", "name", "voiceId", "personalityTraits", "interests", "avatarTemplate", "relationshipLevel", "userId") VALUES ('44d162cf-ceef-47dc-a1dc-26da3d86dac8', 'Kai', 'voice1', 'empathetic', 'sports', 'template2', 842, '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');

INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('07621ddb-e45f-496b-a0f6-d692925edb5b', 'voice', 'mountain', 'concert', 'ca351c98-ebdf-4807-acdd-af516f1916ea');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('a5b33668-e509-49f3-a699-ac8c111fc250', 'text', 'home', 'concert', '439b0a00-74ca-4515-93d6-58ca129e18c8');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('c6158804-d18f-44aa-a1d3-465bab8e390b', 'voice', 'park', 'concert', '873c66b8-1981-402a-90ce-ed8e5fef1e7f');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('d815c1c7-0ea1-49e8-be8a-8f21cb7922b7', 'voice', 'cafe', 'sunset', '0abbad5b-039b-4a36-a495-cb494738b838');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('c17284fe-af9e-4b98-8aeb-f2a1deb6354a', 'emoji', 'mountain', 'picnic', '439b0a00-74ca-4515-93d6-58ca129e18c8');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('b8c047ee-4bbf-405f-891b-4c476b8d7f15', 'GIF', 'mountain', 'sunset', '23bf7689-17d5-4234-9269-3d324367b2ea');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('b11b1e2b-7849-42b4-91b9-037375df68d0', 'text', 'cafe', 'stargazing', '439b0a00-74ca-4515-93d6-58ca129e18c8');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('4d67323e-eaaa-44d4-9066-0e4066157a0d', 'image', 'cafe', 'movie night', '1d7b1321-879b-4860-8cda-bf1ac7161e7b');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('60d4ff92-60a7-4a81-9af6-ad806f451b4a', 'voice', 'park', 'stargazing', 'c35d5c53-9bff-46e9-866d-37e0da809a1a');
INSERT INTO "Conversation" ("id", "type", "setting", "theme", "userId") VALUES ('ea7cb7b3-c06c-4d34-8170-3faf5050ccda', 'GIF', 'cafe', 'sunset', '0abbad5b-039b-4a36-a495-cb494738b838');

INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('e4508e98-6c68-4f80-9a0f-09b253838eb2', 'I remember you mentioned liking sunsets.', 'text', 'user', '4d67323e-eaaa-44d4-9066-0e4066157a0d');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('64917336-8e9f-468c-be49-b7eb952c9db2', 'Do you want to play a game', 'emoji', 'user', 'b8c047ee-4bbf-405f-891b-4c476b8d7f15');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('7a18930f-dfca-42f2-a169-245cadb72742', 'Lets go on a virtual beach date', 'voice', 'user', '4d67323e-eaaa-44d4-9066-0e4066157a0d');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('19d5c743-7c4b-40a6-8b84-bcdf25badd70', 'I remember you mentioned liking sunsets.', 'gif', 'AI', 'c6158804-d18f-44aa-a1d3-465bab8e390b');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('a700bc78-31e4-446a-94e2-e220c6c12e48', 'I remember you mentioned liking sunsets.', 'voice', 'user', '4d67323e-eaaa-44d4-9066-0e4066157a0d');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('94c35cdf-7e93-4ddb-9e20-263290950d42', 'I found a new recipe for us to try', 'emoji', 'AI', '4d67323e-eaaa-44d4-9066-0e4066157a0d');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('b9b55d05-bb5b-47d1-bd84-3401a841a546', 'Do you want to play a game', 'voice', 'AI', 'c17284fe-af9e-4b98-8aeb-f2a1deb6354a');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('67838246-9b8a-4af1-b8e2-3468c5908e43', 'Hey how was your day', 'gif', 'AI', 'b8c047ee-4bbf-405f-891b-4c476b8d7f15');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('bc6f87c7-126f-4f70-bb2c-1aeb964b02d8', 'Hey how was your day', 'text', 'user', '60d4ff92-60a7-4a81-9af6-ad806f451b4a');
INSERT INTO "Message" ("id", "content", "type", "sender", "conversationId") VALUES ('3c6afe96-d20b-4960-9480-3fd29a48bb37', 'Lets go on a virtual beach date', 'text', 'AI', 'd815c1c7-0ea1-49e8-be8a-8f21cb7922b7');

INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('daf820e9-5e4c-4194-82ae-ef4f606c731f', 'vacation', 'Users birthday is on March 5th.', 171, 643, 'c35d5c53-9bff-46e9-866d-37e0da809a1a');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('b382fbe7-06c5-4f99-927b-b7967967a916', 'hobby', 'User went to Hawaii for vacation last summer.', 258, 509, '873c66b8-1981-402a-90ce-ed8e5fef1e7f');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('4eb226ef-0ef4-4989-a628-e7a2e8768849', 'birthday', 'User enjoys painting as a hobby.', 455, 126, '873c66b8-1981-402a-90ce-ed8e5fef1e7f');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('ba94f57e-1b8c-4f60-a881-22aee83cce02', 'vacation', 'Users favorite movie is Inception.', 803, 775, 'c35d5c53-9bff-46e9-866d-37e0da809a1a');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('9140c5be-be10-4ba1-a650-85d764c29786', 'birthday', 'User went to Hawaii for vacation last summer.', 179, 256, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('a8d1b96b-244f-4a85-895c-c2a8fd4368b9', 'hobby', 'Users birthday is on March 5th.', 142, 361, 'ca351c98-ebdf-4807-acdd-af516f1916ea');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('6379278a-e741-4730-bee3-d3f4710cfe5b', 'vacation', 'Users favorite movie is Inception.', 920, 567, '1d7b1321-879b-4860-8cda-bf1ac7161e7b');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('bccfe986-87a0-495e-a47f-71a5e8d3ed81', 'favorite_movie', 'Users birthday is on March 5th.', 662, 252, '23bf7689-17d5-4234-9269-3d324367b2ea');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('15064a0c-25a0-4967-8046-f3032b83f587', 'birthday', 'User went to Hawaii for vacation last summer.', 77, 904, 'c35d5c53-9bff-46e9-866d-37e0da809a1a');
INSERT INTO "Memory" ("id", "type", "content", "privacyLevel", "moodRating", "userId") VALUES ('b0b156ca-2a9b-4420-a2ea-649dc6f9bffc', 'vacation', 'Users birthday is on March 5th.', 753, 678, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('92811a6b-d886-4e03-a63b-3b1b9ec9b2d0', 'Virtual Date', 249, 'Completed', '23bf7689-17d5-4234-9269-3d324367b2ea');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('bfb0a03d-8a72-441e-8b1d-42d178c5e61b', 'Daily CheckIn', 9, 'Completed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('654cf379-8e85-4b66-a0bb-627023e969a5', 'Virtual Date', 398, 'Failed', '23bf7689-17d5-4234-9269-3d324367b2ea');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('740621df-5e58-49a7-a259-09feea25bf6e', 'Virtual Date', 292, 'Pending', '873c66b8-1981-402a-90ce-ed8e5fef1e7f');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('b261214f-dd2e-4c62-bbe3-16c0715f7e8b', 'Daily CheckIn', 312, 'Failed', '0abbad5b-039b-4a36-a495-cb494738b838');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('8eb6029e-ab51-4736-8592-4211a94438d1', 'Virtual Date', 891, 'Failed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('6e89843f-0606-4113-9428-e91db9ad2f4b', 'Mood Tracking', 718, 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('2cb26f83-84b6-4ced-a745-35ecaf2d535c', 'MiniGame', 880, 'Failed', '23bf7689-17d5-4234-9269-3d324367b2ea');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('222750e5-3f0b-4451-84c3-af6236539521', 'MiniGame', 38, 'Failed', '1d7b1321-879b-4860-8cda-bf1ac7161e7b');
INSERT INTO "Activity" ("id", "type", "score", "status", "userId") VALUES ('1c33d3d4-5a21-4290-9a92-b10512b17738', 'Mood Tracking', 571, 'Completed', '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');

INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('77c8ae11-c568-4e56-96a4-70f86d00fa96', 'Virtual Date', 16, 'In Progress', 'ca351c98-ebdf-4807-acdd-af516f1916ea');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('ffafb45f-13b3-4ac1-a4ec-e22441de231b', 'Game Master', 747, 'Completed', 'c35d5c53-9bff-46e9-866d-37e0da809a1a');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('5ba1f6a6-cd6c-4287-aa23-fe8f41cd2433', 'Virtual Date', 928, 'In Progress', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('04a71d45-9052-49bf-9abe-fd25d92639f5', 'Art Collector', 391, 'In Progress', 'c35d5c53-9bff-46e9-866d-37e0da809a1a');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('80187d15-2d25-4b12-8be2-6acdf37ea611', 'Chat Streak', 978, 'Locked', '23bf7689-17d5-4234-9269-3d324367b2ea');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('a1aa05a6-1d58-46a4-bc4a-1a08ea380df1', 'Game Master', 647, 'Completed', '1d7b1321-879b-4860-8cda-bf1ac7161e7b');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('405c6476-7fa8-4b9f-8ef7-80525039e46b', 'Art Collector', 886, 'Completed', '873c66b8-1981-402a-90ce-ed8e5fef1e7f');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('5e9f3ed2-5bc3-49c1-95ee-0abd399d7e3b', 'Art Collector', 69, 'Completed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('c5a3687a-7490-45ec-8749-ce0926d9babf', 'Chat Streak', 148, 'In Progress', '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');
INSERT INTO "Achievement" ("id", "type", "progress", "status", "userId") VALUES ('eb5bb17b-719f-440f-a26b-84ddd4c90040', 'Memory Keeper', 771, 'Pending', '873c66b8-1981-402a-90ce-ed8e5fef1e7f');

INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('dd30b646-324f-4583-bf1b-2de4799f32bd', 'avatar', 'AW345', 'completed', '14.99', '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('2c5b4568-d14d-433d-b9a5-f72c9e9d8bd7', 'virtual date theme', 'VP456', 'completed', '14.99', '439b0a00-74ca-4515-93d6-58ca129e18c8');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('9ed117be-7a80-4305-9704-aaf08da3f9c0', 'voice pack', 'VD789', 'pending', '4.99', '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('dd70fe2a-7989-43c7-adc6-f258cc075bfe', 'avatar', 'AV123', 'refunded', '7.50', '439b0a00-74ca-4515-93d6-58ca129e18c8');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('cd8734c1-d4f1-4bda-bc14-06a0a0268e2d', 'artwork', 'VP456', 'completed', '4.99', 'bc097b10-3a69-4f4c-8078-e2e2b581d6c5');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('8f988f2f-24e0-4c47-8f41-96f257af17c1', 'avatar', 'VD789', 'failed', '4.99', '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('a4ede0f3-8ca1-46d1-8cf6-df56afc43f63', 'voice pack', 'VD789', 'in progress', '4.99', '873c66b8-1981-402a-90ce-ed8e5fef1e7f');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('aa4bc81c-6c60-4b69-ac30-d9ec52d3998e', 'virtual date theme', 'AV123', 'refunded', '4.99', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('9757898b-0202-442d-b7b8-f9f272e79f29', 'minigame', 'AW345', 'in progress', '7.50', 'bc097b10-3a69-4f4c-8078-e2e2b581d6c5');
INSERT INTO "Purchase" ("id", "itemType", "itemId", "status", "amount", "userId") VALUES ('5896893f-3691-4821-acb1-dd26d68e5825', 'virtual date theme', 'MG012', 'completed', '9.99', '0abbad5b-039b-4a36-a495-cb494738b838');

INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('14354145-b519-4a9b-bb65-5d27365aaf94', 'Message', 'Congratulations Youve reached a new relationship level.', 'Archived', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('a39c1c15-222c-44ae-8a2d-03510b1f7b4e', 'Achievement', 'Congratulations Youve reached a new relationship level.', 'Pending', '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('80674ebf-2926-4051-9b50-30c99781a02f', 'Activity Suggestion', 'How are you feeling today Lets check in.', 'Read', 'ca351c98-ebdf-4807-acdd-af516f1916ea');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('7ac23a28-a323-427d-a519-78624b3ac355', 'Message', 'How about a trivia game to boost your mood', 'Unread', '439b0a00-74ca-4515-93d6-58ca129e18c8');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('c571dab9-8f1f-4593-a3c9-c1a5c1e48a44', 'Achievement', 'Congratulations Youve reached a new relationship level.', 'Archived', 'ca351c98-ebdf-4807-acdd-af516f1916ea');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('a635bcc1-f82e-4f7d-8ef4-7b0d7923fa69', 'Daily CheckIn', 'You have a new message from your AI companion.', 'Read', 'c35d5c53-9bff-46e9-866d-37e0da809a1a');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('2237ff2d-06bd-4e45-9a4a-2ddb30f9436d', 'Message', 'How about a trivia game to boost your mood', 'Read', '23dcc3c7-7bb6-4fb5-8ffb-de7426ce8dc4');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('a75555b4-4079-4f49-9af4-b1487b0df3e6', 'Achievement', 'Dont forget your virtual date tonight', 'Read', '1d7b1321-879b-4860-8cda-bf1ac7161e7b');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('ba0b5393-bfe1-4734-8b1f-fb4d132d1d76', 'Activity Suggestion', 'You have a new message from your AI companion.', 'Dismissed', '439b0a00-74ca-4515-93d6-58ca129e18c8');
INSERT INTO "Notification" ("id", "type", "content", "status", "userId") VALUES ('a7746e44-d13e-4d5d-be4d-0b0daf6f0cec', 'Achievement', 'Dont forget your virtual date tonight', 'Pending', '1d7b1321-879b-4860-8cda-bf1ac7161e7b');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
