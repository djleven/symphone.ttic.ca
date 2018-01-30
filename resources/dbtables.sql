CREATE TABLE projects (id INT AUTO_INCREMENT NOT NULL, owner_id INT NOT NULL, title VARCHAR(60) NOT NULL, description VARCHAR(255) NOT NULL, status VARCHAR(60) NOT NULL, created DATETIME NOT NULL, updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, INDEX IDX_5C93B3A47E3C61F9 (owner_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

CREATE TABLE project_user (project_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_B4021E51166D1F9C (project_id), INDEX IDX_B4021E51A76ED395 (user_id), PRIMARY KEY(project_id, user_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

CREATE TABLE todos (id INT AUTO_INCREMENT NOT NULL, owner_id INT NOT NULL, project_id INT NOT NULL, title VARCHAR(60) NOT NULL, description VARCHAR(255) NOT NULL, status VARCHAR(60) NOT NULL, created DATETIME NOT NULL, updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, INDEX IDX_CD8262557E3C61F9 (owner_id), INDEX IDX_CD826255166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

CREATE TABLE updates (id INT AUTO_INCREMENT NOT NULL, owner_id INT NOT NULL, todo_id INT NOT NULL, title VARCHAR(60) NOT NULL, description VARCHAR(255) NOT NULL, status VARCHAR(60) NOT NULL, created DATETIME NOT NULL, updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, INDEX IDX_454813307E3C61F9 (owner_id), INDEX IDX_45481330EA1EBC33 (todo_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_1483A5E9F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

ALTER TABLE projects ADD CONSTRAINT FK_5C93B3A47E3C61F9 FOREIGN KEY (owner_id) REFERENCES users (id);

ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51166D1F9C FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE;
ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51A76ED395 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE;

ALTER TABLE todos ADD CONSTRAINT FK_CD8262557E3C61F9 FOREIGN KEY (owner_id) REFERENCES users (id);
ALTER TABLE todos ADD CONSTRAINT FK_CD826255166D1F9C FOREIGN KEY (project_id) REFERENCES projects (id);

ALTER TABLE updates ADD CONSTRAINT FK_454813307E3C61F9 FOREIGN KEY (owner_id) REFERENCES users (id);
ALTER TABLE updates ADD CONSTRAINT FK_45481330EA1EBC33 FOREIGN KEY (todo_id) REFERENCES todos (id);
