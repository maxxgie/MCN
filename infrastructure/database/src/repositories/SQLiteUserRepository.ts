import { IUserRepository, User } from '@mcn/domain';
import { DatabaseManager } from '../connection';
import { UserRole } from '@mcn/types';

export class SQLiteUserRepository implements IUserRepository {
  private db = DatabaseManager.getInstance().getDb();

  async findById(id: string): Promise<User | null> {
    const row = await this.db
      .selectFrom('users')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();

    if (!row) return null;
    return this.mapToEntity(row);
  }

  async findByEmail(email: string): Promise<User | null> {
    const row = await this.db
      .selectFrom('users')
      .selectAll()
      .where('email', '=', email)
      .executeTakeFirst();

    if (!row) return null;
    return this.mapToEntity(row);
  }

  async findByUsername(username: string): Promise<User | null> {
    const row = await this.db
      .selectFrom('users')
      .selectAll()
      .where('username', '=', username)
      .executeTakeFirst();

    if (!row) return null;
    return this.mapToEntity(row);
  }

  async save(user: User): Promise<void> {
    const userAny = user as any;
    await this.db
      .insertInto('users')
      .values({
        id: userAny.id,
        email: userAny.email,
        username: userAny.username,
        first_name: userAny.firstName,
        last_name: userAny.lastName,
        avatar: null,
        role: userAny.role,
        institution: null,
        major: null,
        year: null,
        settings: JSON.stringify(userAny.settings),
        is_active: userAny.isActive ? 1 : 0,
        last_active_at: null,
        created_at: userAny.createdAt.getTime(),
        updated_at: userAny.updatedAt.getTime(),
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet({
          email: userAny.email,
          username: userAny.username,
          first_name: userAny.firstName,
          last_name: userAny.lastName,
          role: userAny.role,
          settings: JSON.stringify(userAny.settings),
          is_active: userAny.isActive ? 1 : 0,
          updated_at: userAny.updatedAt.getTime(),
        })
      )
      .execute();
  }

  async delete(id: string): Promise<void> {
    await this.db.deleteFrom('users').where('id', '=', id).execute();
  }

  async findAll(): Promise<User[]> {
    const rows = await this.db.selectFrom('users').selectAll().execute();
    return rows.map((row) => this.mapToEntity(row));
  }

  private mapToEntity(row: any): User {
    const settings = JSON.parse(row.settings);
    const user = Object.create(User.prototype);
    user.id = row.id;
    user.email = row.email;
    user.username = row.username;
    user.firstName = row.first_name;
    user.lastName = row.last_name;
    user.role = row.role as UserRole;
    user.settings = settings;
    user.isActive = row.is_active === 1;
    user.createdAt = new Date(row.created_at);
    user.updatedAt = new Date(row.updated_at);
    return user;
  }
}
