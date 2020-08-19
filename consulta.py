from sqlalchemy import create_engine
import pymysql
import pandas as pd

db_connection_str = 'mysql+pymysql://u400609029_tdiaz:Tdm1010.@185.201.11.86/u400609029_Escuela'
db_connection = create_engine(db_connection_str)

conn = db_connection.connect()

df_TOTAL = pd.read_sql('SELECT * FROM Persona', con=conn)
df_Tomas = pd.read_sql('SELECT * FROM Persona WHERE idPersona = 192667', con=conn)

conn.close()

print(df_TOTAL)
print(df_Tomas)